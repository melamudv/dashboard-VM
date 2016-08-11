import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES  } from '@angular/router';




@Component({
    selector: 'header-top',
    templateUrl: 'app/header/header.component.html',
    styleUrls: ['app/header/header.component.css'],
    directives: [ROUTER_DIRECTIVES ]
})
export class HeaderTop implements OnInit {
    constructor(
        private router: Router) {
        this.router = router;
    }
    ngOnInit() {
        console.log("Header Here");
    }

}

