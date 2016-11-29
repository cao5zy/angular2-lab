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

import { Directive, ElementRef, OnInit, AfterContentInit, AfterViewChecked } from '@angular/core';

@Directive({
	selector: '[lab-bootstrap-popover]'
	, inputs: []
	,host:{

	}
})
export class BootstrapPopoverDirective implements AfterViewChecked {

	//绑定内容的div的id

	private content:string = "";

	private _element:any = null;

	constructor(el:ElementRef)
	{
		this._element = el.nativeElement;

	


	}

	get hostId():string{
		return $(this._element).attr('id') as string;
	}

	get contentId():string{
		return $(this._element).attr('contentid') as string;
	}

	// ngOnInit(){
	// 	console.log('ngOnInit ', this.hostId);
	// }

	// ngAfterContentInit(){
	// 	console.log('ngAfterContentInit ', this.hostId);

	// }

	ngAfterViewChecked(){
		console.log('ngAfterViewChecked ', this.hostId);
		$('#' + this.hostId).popover({
			html:true
			,content:():string=>{
				return $('#' + this.contentId).html();
			}
		});

	}

}