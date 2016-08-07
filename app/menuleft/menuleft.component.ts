import { Component, OnInit } from '@angular/core';
import { Router, ROUTER_DIRECTIVES  } from '@angular/router';



@Component({
    selector: 'menu-left', 
    templateUrl: 'app/menuleft/menuleft.component.html',
    styleUrls: ['app/menuleft/menuleft.component.css'],
    directives: [ROUTER_DIRECTIVES ]
})
export class MenuLeft implements OnInit {
    constructor(
        private router: Router) {
        this.router = router;
    }
    ngOnInit() {
       console.log("Here MenuLeft");
    }
    
}

