import { Component, OnInit, ViewChild, } from '@angular/core';
import { Router } from '@angular/router';

import * as _ from 'underscore';

@Component({
  // moduleId: module.id,
  selector: 'ent-est-mng',
  templateUrl: '../template/ent-est-mng.component.html',
  styleUrls: ['../style/ent-est-mng.component.css']
}) 
export class EntEstMngComponent implements OnInit {

  private totalPages: number = 0;
  private currentPage: number = 0;
  private selectAllField: boolean = false;
  private criteria: string = "";

  constructor(
    private router: Router
  ) {
  }

  ngOnInit() {

  }
}