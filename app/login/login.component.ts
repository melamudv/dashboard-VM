import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import {ROUTER_DIRECTIVES} from '@angular/router';


import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],

    directives: [ROUTER_DIRECTIVES]
})

export class LoginComponent implements OnInit{
    constructor(private http: Http) {
        this.http = http;
    }
    data: any;
    result: Object;
    ngOnInit() {
        this.data = {};
        this.http.get('/app/login/data.json').toPromise()
            .then((res: Response) => {
                this.data = res.json();
                () => console.log('done',res.json())
            });
    }
    // onSelect() {
    //     this.router.navigate(['/dashboard']);
    // }
}





