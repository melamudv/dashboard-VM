import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';

import 'rxjs/add/operator/toPromise';
import { MODAL_DIRECTIVES  } from 'ng2-bs3-modal/ng2-bs3-modal';
import values = require("core-js/fn/array/values");
import { ArrayFilterPipe } from './array-filter.pipe';
import { MenuLeft } from './../includes/menuleft/menuleft.component';
import { HeaderTop } from './../includes/header/header.component';


@Component({
    selector: 'my-dashboard',
    directives: [MODAL_DIRECTIVES, MenuLeft, HeaderTop],
    pipes: [ArrayFilterPipe],
    templateUrl: 'app/under/under.component.html',
    styleUrls: ['app/under/under.component.css']
})
export class underConstructorComponent implements OnInit {
    ngOnInit() {
        console.log("under page");

    }
}

