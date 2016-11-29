import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BootstrapPopoverDirective } from './';


@Component({
	selector: 'lab-component1',
	templateUrl: './../template/lab-component1.template.html',
	styleUrls: [],
	providers: []	
})
export class LabComponent1Component implements OnInit{
	@ViewChild("popOver1")
	private _popover1: BootstrapPopoverDirective;

	ngOnInit(){

	}

	click1(){
		this._popover1.loadPopover('设置值1');
	}

	click2(){
		this._popover1.loadPopover('设置值2');
	}
}