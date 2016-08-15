import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { MODAL_DIRECTIVES, ModalComponent  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { Router, ROUTER_DIRECTIVES  } from '@angular/router';
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../../includes/menuleft/menuleft.component';
import { HeaderTop } from './../../includes/header/header.component';

@Component({
    selector: 'my-dashboard',
    directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop, ROUTER_DIRECTIVES],
    pipes: [ArrayFilterPipe],
    templateUrl: 'app/catalog/dashboard/dashboard.component.html',
    styleUrls: ['app/catalog/dashboard/dashboard.component.css']
})
export class CatalogDashboardComponent implements OnInit {
    logUser: any;
    constructor(private http: Http, private _router: Router) {
        this.http = http;
        this._router = _router;
    }

    ngOnInit() {

        this.logUser = localStorage.getItem('auth_token');
    }

}

