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

	private content: string = "none";

	ngOnInit(){

	}

	click1(){
		this.content = "设置值1";
	}

	click2(){
		this.content = "设置值2";
	}


}