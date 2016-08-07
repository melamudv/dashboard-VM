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
require('rxjs/add/operator/toPromise');
var http_1 = require('@angular/http');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var array_filter_pipe_1 = require('./array-filter.pipe');
var menuleft_component_1 = require('./../menuleft/menuleft.component');
var DashboardComponent = (function () {
    function DashboardComponent(http) {
        this.http = http;
        this.http = http;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.data = {};
        this.http.get("/app/dashboard/data.json")
            .map(function (response) { return response.json().VCenter; }) // <------
            .subscribe(function (data) { return _this.VCenter = data; }, function (error) { return console.log(error); });
        setTimeout(function () {
            // n = n + 5
        }, 1000);
    };
    // updatePercent(value: number){
    //   console.log(value);
    // }
    DashboardComponent.prototype.refresh = function () {
        this.ngOnInit();
    };
    DashboardComponent.prototype.onSelect = function () {
        // let link = ['/dashboard'];
        // this.router.navigate(link);
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'my-dashboard',
            directives: [ng2_bs3_modal_1.MODAL_DIRECTIVES, menuleft_component_1.MenuLeft],
            pipes: [array_filter_pipe_1.ArrayFilterPipe],
            templateUrl: 'app/dashboard/dashboard.component.html',
            styleUrls: ['app/dashboard/dashboard.component.css']
        }), 
        __metadata('design:paramtypes', [http_1.Http])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map