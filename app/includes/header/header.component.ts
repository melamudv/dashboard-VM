import { Component, OnInit } from '@angular/core';

import { Router, ROUTER_DIRECTIVES  } from '@angular/router';




@Component({
    selector: 'header-top',
    templateUrl: 'app/includes/header/header.component.html',
    styleUrls: ['app/includes/header/header.component.css'],
    directives: [ROUTER_DIRECTIVES ]
})
export class HeaderTop implements OnInit {
    logUser: any;
    constructor(
        private router: Router) {
        this.router = router;
    }
    ngOnInit() {
        console.log("Header Here");
        this.logUser = localStorage.getItem('auth_token');
    }
    signOut(){
        localStorage.removeItem('id_token');
        localStorage.removeItem('auth_token');
        this.router.navigate(['/']);
    }
}

