"use strict";
var router_1 = require('@angular/router');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var login_component_1 = require('./login/login.component');
var home_component_1 = require('./home/home.component');
var backup_component_1 = require('./backup/backup.component');
var viewpolicie_component_1 = require('./policies/viewpolicie/viewpolicie.component');
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
    },
    {
        path: 'catalog/backup',
        component: backup_component_1.CatalogBackupComponent
    }, {
        path: 'policies/data-protection',
        component: viewpolicie_component_1.PoliciesDataProtection
    }
];
exports.appRouterProviders = [
    router_1.provideRouter(routes)
];
//# sourceMappingURL=app.routes.js.map