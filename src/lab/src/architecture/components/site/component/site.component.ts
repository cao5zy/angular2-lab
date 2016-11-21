import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-root',
  templateUrl: '../template/site.component.html',
  styleUrls: ['../style/site.component.css']
})
export class SiteComponent implements OnInit{
  title: string = 'Fox Cloud Portal!';
  left_content_script: string;
  
  constructor (
  ) { }
  
  ngOnInit() {
  }
}
