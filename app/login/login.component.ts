import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router, ROUTER_DIRECTIVES  } from '@angular/router';


import 'rxjs/add/operator/toPromise';


@Component({
    selector: 'my-login',
    templateUrl: 'app/login/login.component.html',
    styleUrls: ['app/login/login.component.css'],
    directives: [ROUTER_DIRECTIVES ]
})

export class LoginComponent implements OnInit{
    constructor(
        private http: Http,
        private _router: Router) {
        this.http    = http;
        this._router = _router;

    }
    data: any;
    loggedIn: any;
    result: Object;
    ngOnInit() {
        this.data = {};
        this.http.get('/app/login/data.json').toPromise()
            .then((res: Response) => {
                this.data = res.json();
                () => console.log('done',res.json())
            });
        console.log("here");
    };
    dataForm = {};
    forSubmit(){
        if(this.data.username == 'admin' && this.data.password == 'admin'){
            this._router.navigate(['/catalog/backup']);
        }
            else if (this.data.username == 'annie' && this.data.password == 'annie'){
            localStorage.setItem('auth_token', 'annie');
            localStorage.setItem('id_token', 'annie');
            this.loggedIn = true;
            this._router.navigate(['/catalog/dashboard']);
        }
        else if (this.data.username == 'ian' && this.data.password == 'ian'){
            localStorage.setItem('auth_token', 'ian');
            localStorage.setItem('id_token', 'ian');
            this.loggedIn = true;
            this._router.navigate(['/policies/data-protection']);
        }
        else{
            console.log('Who the f are you');
        }
    }
    // onSelect() {
    //     this.router.navigate(['/dashboard']);
    // }
}





