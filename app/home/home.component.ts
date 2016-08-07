import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { MODAL_DIRECTIVES  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../menuleft/menuleft.component';


@Component({
  selector: 'my-dashboard',
  directives: [MODAL_DIRECTIVES, MenuLeft],
  pipes: [ArrayFilterPipe],
  templateUrl: 'app/home/home.component.html',
  styleUrls: ['app/home/home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit() {
    console.log("Home Page");

  }
}

