import { Component, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';
import { DicLoader, ItemLoader, RestApi, RestApiCfg, LayoutService, NoticeComponent, PopupComponent, ConfirmComponent, SystemDictionaryService, SystemDictionary } from '../../../../architecture';
import { CertMethod, Status, EntEstItem, EntEst
  , EntEstCreResourceQuota} from '../model';

import { EntEstCreService, Paging } from './../service/ent-est-cre.service';
import * as _ from 'underscore';

@Component({
  // moduleId: module.id,
  selector: 'ent-est-mng',
  templateUrl: '../template/ent-est-mng.component.html',
  styleUrls: ['../style/ent-est-mng.component.css'],
  providers: [EntEstCreService, SystemDictionaryService]
}) 
export class EntEstMngComponent implements OnInit {

  private totalPages: number = 0;
  private currentPage: number = 0;
  private selectAllField: boolean = false;
  private criteria: string = "";
  private entEst: EntEst = new EntEst();
  private dic:SystemDictionary[];
  private entEstMng:ItemLoader<EntEstItem> = null;
  private entEstResource:ItemLoader<EntEstCreResourceQuota> = null;
  private statusDic:DicLoader = null;

  constructor(
    private layoutService: LayoutService,
    private router: Router,
    private service: EntEstCreService,
    private restApiCfg:RestApiCfg,
    private restApi:RestApi
  ) {
    this.entEstMng = new ItemLoader<EntEstItem>(true, "企业管理列表", "ent-mng.ent-est-mng.enterprise.get", restApiCfg, restApi);
    
    //配置企业配额加载
    this.entEstResource = new ItemLoader<EntEstCreResourceQuota>(true, "企业配额", "ent-mng.ent-est-mng.enterprise.resourcequota.get", restApiCfg, restApi);
    this.entEstResource.MapFunc = (source:Array<any>, target:Array<EntEstCreResourceQuota>)=>{
      for(let item of source)
      {
        let obj = new EntEstCreResourceQuota();
        target.push(obj);

        _.extendOwn(obj, item);
        obj.memroyQuota = item.memQuota;// : number = null;//": 0,//可用内存数量
        obj.physicalQuota = item.physicalMachineQuota;// : number = null;//": 0,//可创建物理机数量
        obj.snapShotQuota = item.snapshotQuota;// : number = null;//": 0,//可创建快照数量
      }
    };

    this.entEstResource.FirstItem = new EntEstCreResourceQuota();


      //字典配置
      this.statusDic = new DicLoader(restApiCfg, restApi, "GLOBAL", "STATUS");
      this.statusDic.SourceName = "status";
      this.statusDic.TargetName = "statusName";
  }

  ngOnInit() {

  }

  onRejected(reason: any) {
      alert(reason);
  }


  selectAll(selectAllField:boolean){
    this.entEstMng.Items.map(n=>{n.checked = selectAllField;});
  }


  appendUrlWithEntName(url:string, entName:string):string{
    if(entName && entName.length >0)
    {
      if(url.indexOf("?") > 0)
        return [url, '&entName=', entName].join('');
      else
        return [url, '?entName=', entName].join('');
    }
    else
      return url;
  }

  //创建企业
  create() {
    this.service.initCache();
    this.router.navigateByUrl("ent-mng/ent-est-mng/ent-est-cre");
  }




  private okCallback:Function = null;

  okClicked(){
    console.log('okClicked');
    if(this.okCallback)
    {
      console.log('okCallback()');
      this.okCallback();
      this.okCallback = null;
    }
  }



  //取消编辑
  cancelEntModify(){
    console.log('取消编辑');
    this.entEst.BasicInfo.reset();
  }

  //取消认证
  cancelCertModify(){
    this.entEst.BasicInfo.reset();
  }

  //选择行
  selectItem(index:number):void
  {
    this.entEstMng.Items.map(n=>{n.checked = false;});
    this.entEstMng.Items[index].checked = true;
  }

  private confirmedHandler:Function = null;
  //启用，禁用，删除的处理
  onConfirmed(){
    if(this.confirmedHandler)
    {
      this.confirmedHandler();
      this.confirmedHandler = null;
    }
  }
}