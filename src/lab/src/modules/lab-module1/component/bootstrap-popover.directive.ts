/*
作者：Cao, Zongying

使用方法：
<button lab-bootstrap-popover id="popOver1" contentid="content1">弹出框1</button>
<button (click)="setContent1_1()">content1_1</button>
<button (click)="setContent1_2()">content1_2</button>
<div id="content1" style="display: none">
{{content1}}
</div>
1. 为元素添加lab-bootstrap-popover属性
2. 必须定义元素的id
3. 必须定义元素的contentid，contentid用于映射到要在popover中显示内容。
4. 定义content区域，这里可以动态绑定数据。另外，要添加display:none，将这个区域隐藏起来。
*/

import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
	selector: '[lab-bootstrap-popover]'
	, inputs: []
	,host:{

	}
})
export class BootstrapPopoverDirective implements OnInit {

	//绑定内容的div的id
	private _contentid:string = null;

	private _id:string = null;

	private content:string = "";

	constructor(el:ElementRef)
	{
		this._id = $(el.nativeElement).attr('id');
		if(!this._id)
			throw "请设置id";

		this._contentid = $(el.nativeElement).attr('contentid') as string;
		if(!this._contentid)
			throw "请设置contentid";


	}

	ngOnInit(){
		console.log('ngOnInit ', this._id);
		$('#' + this._id).popover({
			html:true
			,content:():string=>{
				return $('#' + this._contentid).html();
			}
		});
	}

}