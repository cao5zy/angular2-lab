import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lab-bootstrap-popover'
	,templateUrl: './../template/lab-bootstrap-popover.template.html'
	,styleUrls: []
})
export class BootstrapPopoverComponent implements OnInit {
	private content:string = "";

	ngOnInit(){
		$('#popover1').popover({
			html:true
			,content:():string=>{
				return this.content;
			}
		});
	}

	//当完成数据绑定时，再调用这个方法
	loadPopover(cont:string = ""){
		this.content = cont;
		
	}

}