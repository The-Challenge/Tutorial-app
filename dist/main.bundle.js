webpackJsonp([1,4],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import { User } from './usersModel.js'
var User = (function () {
    function User() {
    }
    return User;
}());
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.jwt = function () {
        // create authorization header with jwt token
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.token) {
            console.log('!!!!!!!!!!!!!!jwt currentUser', currentUser);
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]({ 'Authorization': 'Bearer ' + currentUser.token });
            return new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ headers: headers });
        }
    };
    AuthenticationService.prototype.login = function (model) {
        return this.http.post('/api/UserSignin', model)
            .map(function (response) {
            console.log('service component', JSON.stringify(model));
            // login successful if there's a jwt token in the response
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.create = function (user) {
        console.log('!!!!!!!!!!!!!!create', User);
        return this.http.post('/api/UserSignup', user, this.jwt()).map(function (response) { return response.json(); });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 332:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 332;


/***/ }),

/***/ 333:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(420);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(455);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'TutorialsApp';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(514),
            styles: [__webpack_require__(509)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__ = __webpack_require__(453);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ROUTES = [
    { path: '', redirectTo: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__["a" /* MainpageComponent */] },
    { path: 'Signup', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'Login', component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */] },
    //otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["b" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__["a" /* MainpageComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        // this.authenticationService.logout();
        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        console.log('login component', this.model);
        this.authenticationService.login(this.model)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(515),
            styles: [__webpack_require__(510)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainpageComponent = (function () {
    function MainpageComponent() {
    }
    MainpageComponent.prototype.ngOnInit = function () {
    };
    MainpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__(516),
            styles: [__webpack_require__(511)]
        }), 
        __metadata('design:paramtypes', [])
    ], MainpageComponent);
    return MainpageComponent;
}());
//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(303);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SignupComponent = (function () {
    function SignupComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.Signup = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.create(this.model)
            .subscribe(function (data) {
            console.log('!!!!!!!!!!!!!!singup', _this.model);
            _this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(517),
            styles: [__webpack_require__(512)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 509:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "a {\r\n    cursor: pointer;\r\n}\r\n\r\n.help-block {\r\n    font-size: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 510:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 511:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 512:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(60)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n\r\n<!--<div class=\"jumbotron\">\r\n    <div class=\"container\">\r\n        <div class=\"col-sm-8 col-sm-offset-2\">\r\n        </div>\r\n    </div>\r\n</div>-->\r\n\r\n<!-- Navbar -->\r\n<div class=\"w3-top\">\r\n <div class=\"w3-bar w3-theme-d2 w3-left-align\">\r\n  <a class=\"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-opennav w3-right w3-hover-white w3-theme-d2\" href=\"javascript:void(0);\" onclick=\"openNav()\"><i class=\"fa fa-bars\"></i></a>\r\n  <a routerLink=\"/Mainpage\" class=\"w3-bar-item w3-button w3-teal\"><i class=\"fa fa-home w3-margin-right\"></i>Logo</a>\r\n  <a href=\"#team\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Team</a>\r\n  <a href=\"#work\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Work</a>\r\n  <a href=\"#pricing\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Price</a>\r\n  <a href=\"#contact\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Contact</a>\r\n    <div class=\"w3-dropdown-hover w3-hide-small\">\r\n    <button class=\"w3-button\" title=\"Notifications\">Dropdown <i class=\"fa fa-caret-down\"></i></button>     \r\n    <div class=\"w3-dropdown-content w3-card-4 w3-bar-block\">\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n    </div>\r\n  </div>\r\n  <a [routerLink]=\"['/Login']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Login</a>\r\n  <a [routerLink]=\"['/Signup']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Signup</a>\r\n  <a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal\" title=\"Search\"><i class=\"fa fa-search\"></i></a>\r\n </div>\r\n</div>\r\n<h1>{{title}}</h1>\r\n\r\n<!-- credits -->\r\n<!--<div class=\"text-center\">\r\n    <p>\r\n        <a href=\"http://jasonwatmore.com/post/2016/09/29/angular-2-user-registration-and-login-example-tutorial\" target=\"_top\">Angular 2 User Registration and Login Example & Tutorial</a>\r\n    </p>\r\n    <p>\r\n        <a href=\"http://jasonwatmore.com\" target=\"_top\">JasonWatmore.com</a>\r\n    </p>\r\n</div>-->\r\n\r\n\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ 515:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n    <h2>Login</h2>\r\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/Signup']\" class=\"btn btn-link\">Signup</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 516:
/***/ (function(module, exports) {

module.exports = "\n<!-- Image Header -->\n<div class=\"w3-display-container w3-animate-opacity\">\n  <img src=\"/w3images/sailboat.jpg\" alt=\"boat\" style=\"width:100%;min-height:350px;max-height:600px;\">\n  <div class=\"w3-container w3-display-bottomleft w3-margin-bottom\">  \n    <button onclick=\"document.getElementById('id01').style.display='block'\" class=\"w3-button w3-xlarge w3-theme w3-hover-teal\" title=\"Go To W3.CSS\">LEARN W3.CSS</button>\n  </div>\n</div>\n\n<!-- Sidebar on click -->\n<nav class=\"w3-sidebar w3-bar-block w3-white w3-card-2 w3-animate-left w3-xxlarge\" style=\"display:none;z-index:2\" id=\"mySidebar\">\n  <a href=\"javascript:void(0)\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-closenav w3-text-teal\">Close\n    <i class=\"fa fa-remove\"></i>\n  </a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 1</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 3</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 4</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 5</a>\n</nav>\n\n\n<!-- Pricing Row -->\n<div class=\"w3-row-padding w3-center w3-padding-64\" id=\"pricing\">\n    <h2>PRICING</h2>\n    <p>Choose a pricing plan that fits your needs.</p><br>\n    <div class=\"w3-third w3-margin-bottom\">\n      <ul class=\"w3-ul w3-border w3-hover-shadow\">\n        <li class=\"w3-theme\">\n          <p class=\"w3-xlarge\">Basic</p>\n        </li>\n        <li class=\"w3-padding-16\"><b>10GB</b> Storage</li>\n        <li class=\"w3-padding-16\"><b>10</b> Emails</li>\n        <li class=\"w3-padding-16\"><b>10</b> Domains</li>\n        <li class=\"w3-padding-16\"><b>Endless</b> Support</li>\n        <li class=\"w3-padding-16\">\n          <h2 class=\"w3-wide\"><i class=\"fa fa-usd\"></i> 10</h2>\n          <span class=\"w3-opacity\">per month</span>\n        </li>\n        <li class=\"w3-theme-l5 w3-padding-24\">\n          <button class=\"w3-button w3-teal w3-padding-large\"><i class=\"fa fa-check\"></i> Sign Up</button>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"w3-third w3-margin-bottom\">\n      <ul class=\"w3-ul w3-border w3-hover-shadow\">\n        <li class=\"w3-theme-l2\">\n          <p class=\"w3-xlarge\">Pro</p>\n        </li>\n        <li class=\"w3-padding-16\"><b>25GB</b> Storage</li>\n        <li class=\"w3-padding-16\"><b>25</b> Emails</li>\n        <li class=\"w3-padding-16\"><b>25</b> Domains</li>\n        <li class=\"w3-padding-16\"><b>Endless</b> Support</li>\n        <li class=\"w3-padding-16\">\n          <h2 class=\"w3-wide\"><i class=\"fa fa-usd\"></i> 25</h2>\n          <span class=\"w3-opacity\">per month</span>\n        </li>\n        <li class=\"w3-theme-l5 w3-padding-24\">\n          <button class=\"w3-button w3-teal w3-padding-large\"><i class=\"fa fa-check\"></i> Sign Up</button>\n        </li>\n      </ul>\n    </div>\n\n    <div class=\"w3-third w3-margin-bottom\">\n      <ul class=\"w3-ul w3-border w3-hover-shadow\">\n        <li class=\"w3-theme\">\n          <p class=\"w3-xlarge\">Premium</p>\n        </li>\n        <li class=\"w3-padding-16\"><b>50GB</b> Storage</li>\n        <li class=\"w3-padding-16\"><b>50</b> Emails</li>\n        <li class=\"w3-padding-16\"><b>50</b> Domains</li>\n        <li class=\"w3-padding-16\"><b>Endless</b> Support</li>\n        <li class=\"w3-padding-16\">\n          <h2 class=\"w3-wide\"><i class=\"fa fa-usd\"></i> 50</h2>\n          <span class=\"w3-opacity\">per month</span>\n        </li>\n        <li class=\"w3-theme-l5 w3-padding-24\">\n          <button class=\"w3-button w3-teal w3-padding-large\"><i class=\"fa fa-check\"></i> Sign Up</button>\n        </li>\n      </ul>\n    </div>\n</div>"

/***/ }),

/***/ 517:
/***/ (function(module, exports) {

module.exports = "  \r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n  <form name=\"form\" (ngSubmit)=\"Signup()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/Login']\" class=\"btn btn-link\">Login</a>\r\n        </div>\r\n    </form>\r\n</div>"

/***/ }),

/***/ 536:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(333);


/***/ })

},[536]);
//# sourceMappingURL=main.bundle.js.map