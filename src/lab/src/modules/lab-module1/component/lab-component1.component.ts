import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BootstrapPopoverDirective } from './';


@Component({
	selector: 'lab-component1',
	templateUrl: './../template/lab-component1.template.html',
	styleUrls: [],
	providers: []	
})
export class LabComponent1Component implements OnInit{
	private content1: string = "none1";
	private content2: string = "none2";
	private nums:Array<number> = [1,2,3];

	ngOnInit(){

	}

	setContent1_1(){
		this.content1 = "content1_1";
	}

	setContent1_2(){
		this.content1 = "content1_2";
	}

	setContent2_1(){
		this.content2 = "content2_1";
	}

	setContent2_2(){
		this.content2 = "content2_2";
	}
}