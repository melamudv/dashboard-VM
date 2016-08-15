import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { MODAL_DIRECTIVES, ModalComponent  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../../includes/menuleft/menuleft.component';
import { HeaderTop } from './../../includes/header/header.component';

@Component({
    selector: 'my-dashboard',
    directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop],
    pipes: [ArrayFilterPipe],
    templateUrl: 'app/policies/newpolicie/newpolicie.component.html',
    styleUrls: ['app/policies/newpolicie/newpolicie.component.css']
})
export class newPoliciesDataProtection implements OnInit {
    constructor(private http: Http) {
        this.http = http;
    }
    Policy: Array<Object>[];
    logUser: any;
    ngOnInit() {
        this.logUser = localStorage.getItem('auth_token');
    }
}

