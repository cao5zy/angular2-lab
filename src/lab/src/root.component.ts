import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fc-root',
  templateUrl: 'root.component.html',
  styleUrls: []
})
export class RootComponent implements OnInit{
  title: string = 'Fox Cloud Portal!';
  left_content_script: string;
  
  constructor (
  ) { }
  
  ngOnInit() {
  }
}