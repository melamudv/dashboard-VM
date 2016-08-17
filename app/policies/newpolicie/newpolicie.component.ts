import { Component, OnInit, Pipe, PipeTransform, ViewChild } from '@angular/core';
import 'rxjs/add/operator/toPromise';
import { Http, Response } from '@angular/http';
import { Router, ROUTER_DIRECTIVES  } from '@angular/router';
import { MODAL_DIRECTIVES, ModalComponent  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../../includes/menuleft/menuleft.component';
import { HeaderTop } from './../../includes/header/header.component';

@Component({
    selector: 'my-dashboard',
    directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop, ROUTER_DIRECTIVES],
    pipes: [ArrayFilterPipe],
    templateUrl: 'app/policies/newpolicie/newpolicie.component.html',
    styleUrls: ['app/policies/newpolicie/newpolicie.component.css']
})
export class newPoliciesDataProtection implements OnInit {
    constructor(private http: Http,  private _router: Router) {
        this.http = http;
        this._router = _router;
    }
    Policy: Array<Object>[];
    logUser: any;
    ngOnInit() {
        this.logUser = localStorage.getItem('auth_token');
    }
    redirectPage(){       
        this._router.navigate(['/policies/data-protection']);
    }
}

