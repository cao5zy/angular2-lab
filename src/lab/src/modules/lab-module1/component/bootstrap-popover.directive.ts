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

		this.hideContent();

	}

	hideContent(){
		console.log('hideContent called', '#' + this._contentid);
		$('#' + this._contentid).css({display:'none'});
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