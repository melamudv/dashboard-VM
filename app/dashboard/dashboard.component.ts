import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { MODAL_DIRECTIVES  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../menuleft/menuleft.component';
import { HeaderTop } from './../header/header.component';



@Component({
  selector: 'my-dashboard',
  directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop],
  pipes: [ArrayFilterPipe],
  templateUrl: 'app/dashboard/dashboard.component.html',
  styleUrls: ['app/dashboard/dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private http: Http) {
    this.http = http;
  }
  data: any;
  n : number;
  result: Object;
  VCenter: Array<Object>[];
  ngOnInit() {
    this.data = {};
    this.http.get(`/app/dashboard/data.json`)
        .map(response => response.json().VCenter) // <------
        .subscribe(
            data => this.VCenter = data,
            error => console.log(error)
        );

    setTimeout(() => {
      // n = n + 5
    }, 1000);


  }
  // updatePercent(value: number){
  //   console.log(value);
  // }
  refresh() {
    this.ngOnInit();
  }
  onSelect() {
    // let link = ['/dashboard'];
    // this.router.navigate(link);
  }
}

