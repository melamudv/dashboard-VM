"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var router_1 = require('@angular/router');
require('rxjs/add/operator/toPromise');
var LoginComponent = (function () {
    function LoginComponent(http, _router) {
        this.http = http;
        this._router = _router;
        this.dataForm = {};
        this.http = http;
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = {};
        this.http.get('/app/login/data.json').toPromise()
            .then(function (res) {
            _this.data = res.json();
            (function () { return console.log('done', res.json()); });
        });
        console.log("here");
    };
    ;
    LoginComponent.prototype.forSubmit = function () {
        if (this.data.username == 'admin' && this.data.password == 'admin') {
            this._router.navigate(['/catalog/backup']);
        }
        else {
            console.log('Who the f are you');
        }
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'my-login',
            templateUrl: 'app/login/login.component.html',
            styleUrls: ['app/login/login.component.css'],
            directives: [router_1.ROUTER_DIRECTIVES]
        }), 
        __metadata('design:paramtypes', [http_1.Http, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map