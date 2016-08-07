"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var routes = [
    {
        path: '',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: dashboard_component_1.DashboardComponent
    },
    {
        path: 'home',
        component: home_component_1.HomeComponent
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map