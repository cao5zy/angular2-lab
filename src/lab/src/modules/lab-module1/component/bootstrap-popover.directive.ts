import { Directive, ElementRef, OnInit, Input, HostBinding, AfterViewInit, AfterViewChecked } from '@angular/core';

@Directive({
	selector: '[lab-bootstrap-popover]'
	, inputs: []
	,host:{

	}
})
export class BootstrapPopoverDirective implements OnInit, AfterViewInit, AfterViewChecked {
	@Input('uid')
	private _uid:string = "";

	private content:string = "";

	constructor(el:ElementRef)
	{

		console.log('lab-bootstrap-popover constructor', el);
	}

	ngOnInit(){
		// $('#popover1').popover({
		// 	html:true
		// 	,content:():string=>{
		// 		return this.content;
		// 	}
		// });
		console.log('lab-bootstrap-popover init', this._uid, this);
	}

	ngAfterViewInit(){
		
		console.log('lab-bootstrap-popover after view init', this._uid, this);
	}

	ngAfterViewChecked(){
		console.log('lab-bootstrap-popover after view checked', this._uid, this);
		
	}

	//当完成数据绑定时，再调用这个方法
	loadPopover(cont:string = ""){
		this.content = cont;
		
	}

}