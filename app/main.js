"use strict";
var platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
var http_1 = require('@angular/http');
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
    app_routes_1.appRouterProviders,
    http_1.HTTP_PROVIDERS,
    ng2_bs3_modal_1.MODAL_DIRECTIVES
]);
//# sourceMappingURL=main.js.map