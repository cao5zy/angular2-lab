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
		// $('#popover1').popover({
		// 	html:true
		// 	,content:():string=>{
		// 		return this.content;
		// 	}
		// });
		console.log('lab-bootstrap-popover init', this._uid, this);
		console.log('content id is:', this._contentid);
	}

	ngAfterViewInit(){
		
		console.log('lab-bootstrap-popover after view init', this._uid, this);
		console.log('content id is:', this._contentid);
	}

	ngAfterViewChecked(){
		console.log('lab-bootstrap-popover after view checked', this._uid, this);
		console.log('content id is:', this._contentid);
		
	}

	//当完成数据绑定时，再调用这个方法
	loadPopover(cont:string = ""){
		this.content = cont;
		
	}

}