import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BootstrapPopoverComponent } from './';


@Component({
	selector: 'lab-component1',
	templateUrl: './../template/lab-component1.template.html',
	styleUrls: [],
	providers: []	
})
export class LabComponent1Component implements OnInit{
	@ViewChild("popOver1")
	private _popover1: BootstrapPopoverComponent;

	ngOnInit(){

	}

	click1(){
		this._popover1.loadPopover('设置值1');
	}

	click2(){
		this._popover1.loadPopover('设置值2');
	}
}