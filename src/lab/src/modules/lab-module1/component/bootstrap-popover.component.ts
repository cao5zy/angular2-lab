import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'lab-bootstrap-popover'
	,templateUrl: './../template/lab-bootstrap-popover.template.html'
	,styleUrls: []
})
export class BootstrapPopoverComponent implements OnInit {

	ngOnInit(){
	}

	showPopover(){

		console.log('show popover');
		
		$('#popover1').popover({
			html:true
			,content:"line1<br/>line2"
		});

		$('#popover1').popover('show');


	}
}