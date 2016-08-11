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
    templateUrl: 'app/policies/viewpolicie/viewpolicie.component.html',
    styleUrls: ['app/policies/viewpolicie/viewpolicie.component.css']
})
export class PoliciesDataProtection implements OnInit {
    ngOnInit() {
        console.log("Policies view  ");

    }
}

