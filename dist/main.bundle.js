webpackJsonp([1,4],{

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(316);
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
            console.log('11111111111111111111loginn', user.token);
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.signup = function (user) {
        console.log('!!!!!!!!!!!!!!signup', User);
        // localStorage.setItem('currentUser', JSON.stringify(user));
        return this.http.post('/api/UserSignup', user, this.jwt()).map(function (response) {
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], AuthenticationService);
    return AuthenticationService;
    var _a;
}());
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ 333:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 333;


/***/ }),

/***/ 334:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(459);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 451:
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
        this.title = '';
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__(519),
            styles: [__webpack_require__(513)]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__(412);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__(457);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__ = __webpack_require__(454);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__userpage_userpage_component__ = __webpack_require__(458);
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
    { path: 'userprofile/:username', component: __WEBPACK_IMPORTED_MODULE_10__userpage_userpage_component__["a" /* UserpageComponent */], authenticate: true },
    //otherwise redirect to home
    { path: '**', redirectTo: '' },
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
                __WEBPACK_IMPORTED_MODULE_10__userpage_userpage_component__["a" /* UserpageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__mainpage_mainpage_component__["a" /* MainpageComponent */]
            ],
            imports: [__WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* RouterModule */].forRoot(ROUTES)
            ],
            providers: [{ provide: __WEBPACK_IMPORTED_MODULE_9__angular_common__["a" /* LocationStrategy */], useClass: __WEBPACK_IMPORTED_MODULE_9__angular_common__["b" /* HashLocationStrategy */] }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(192);
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
            console.log('!!!!!!!!!!!!!!!!!', _this.model.username);
            // this.router.navigate([this.returnUrl]);
            _this.router.navigate(['userprofile/' + _this.model.username]);
        });
    };
    LoginComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__(520),
            styles: [__webpack_require__(514)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _c) || Object])
    ], LoginComponent);
    return LoginComponent;
    var _a, _b, _c;
}());
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 454:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_mainpage_service__ = __webpack_require__(455);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
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
    function MainpageComponent(router, mainpageService) {
        this.router = router;
        this.mainpageService = mainpageService;
        this.loading = false;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('!!!!!!!!!!!!!!Tutorials');
        this.loading = true;
        this.mainpageService.gettutorials()
            .subscribe(function (data) {
            _this.Tutorials = data;
            console.log('!!!!!!!!!!!!!!singup', _this.Tutorials);
            // this.router.navigate(['/login']);
        }, function (error) {
            _this.loading = false;
        });
    };
    MainpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-mainpage',
            template: __webpack_require__(521),
            styles: [__webpack_require__(515)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_mainpage_service__["a" /* MainpageService */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_mainpage_service__["a" /* MainpageService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_mainpage_service__["a" /* MainpageService */]) === 'function' && _b) || Object])
    ], MainpageComponent);
    return MainpageComponent;
    var _a, _b;
}());
//# sourceMappingURL=mainpage.component.js.map

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainpageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Tutorial = (function () {
    function Tutorial() {
    }
    return Tutorial;
}());
var MainpageService = (function () {
    function MainpageService(http) {
        this.http = http;
    }
    MainpageService.prototype.create = function (tutorial) {
        console.log('!!!!!!!!!!!!!!create', tutorial);
        return this.http.post('/api/tutorial', tutorial).map(function (response) { return response.json(); });
    };
    MainpageService.prototype.gettutorials = function () {
        return this.http.get('/api/tutorials').map(function (response) { return response.json(); });
    };
    MainpageService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], MainpageService);
    return MainpageService;
    var _a;
}());
//# sourceMappingURL=mainpage.service.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserprofileService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserprofileService = (function () {
    function UserprofileService(http) {
        this.http = http;
    }
    UserprofileService.prototype.getProfile = function (username) {
        return this.http.get('/api/userprofile/' + username).map(function (res) { return res.json(); });
    };
    UserprofileService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["e" /* Injectable */])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === 'function' && _a) || Object])
    ], UserprofileService);
    return UserprofileService;
    var _a;
}());
//# sourceMappingURL=userprofile.service.js.map

/***/ }),

/***/ 457:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__ = __webpack_require__(192);
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
        this.authenticationService.signup(this.model)
            .subscribe(function (data) {
            console.log('!!!!!!!!!!!!!!singup', _this.model);
            _this.router.navigate(['userprofile/' + _this.model.username]);
        }, function (error) {
            _this.loading = false;
        });
    };
    SignupComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__(522),
            styles: [__webpack_require__(516)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _b) || Object])
    ], SignupComponent);
    return SignupComponent;
    var _a, _b;
}());
//# sourceMappingURL=signup.component.js.map

/***/ }),

/***/ 458:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_userprofile_service__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__ = __webpack_require__(192);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserpageComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserpageComponent = (function () {
    function UserpageComponent(route, router, userprofileService, authenticationService) {
        this.route = route;
        this.router = router;
        this.userprofileService = userprofileService;
        this.authenticationService = authenticationService;
        this.model = {};
    }
    UserpageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage = this.route.queryParams.subscribe(function (params) {
            console.log('@@@@@@@userpage//params', params);
            var username = params['username'];
            console.log('@@@@@@@userpage//username', username);
            _this.userprofileService.getProfile(username);
        });
    };
    UserpageComponent.prototype.logout = function () {
        this.authenticationService.logout();
        // console.log('logout',)
    };
    UserpageComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_5" /* Component */])({
            selector: 'app-userpage',
            template: __webpack_require__(523),
            styles: [__webpack_require__(517)],
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_userprofile_service__["a" /* UserprofileService */], __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]]
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === 'function' && _b) || Object, (typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_userprofile_service__["a" /* UserprofileService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_2__services_userprofile_service__["a" /* UserprofileService */]) === 'function' && _c) || Object, (typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_3__services_authentication_service__["a" /* AuthenticationService */]) === 'function' && _d) || Object])
    ], UserpageComponent);
    return UserpageComponent;
    var _a, _b, _c, _d;
}());
//# sourceMappingURL=userpage.component.js.map

/***/ }),

/***/ 459:
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

/***/ 513:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "a {\r\n    cursor: pointer;\r\n}\r\n\r\n.help-block {\r\n    font-size: 12px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 514:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 515:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 516:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 517:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(52)();
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 519:
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\r\n\r\n<!-- Navbar -->\r\n  <a [routerLink]=\"['/']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Logout</a>\r\n\r\n<div class=\"w3-top\">\r\n <div class=\"w3-bar w3-theme-d2 w3-left-align\">\r\n  <a class=\"w3-bar-item w3-button w3-hide-medium w3-hide-large w3-opennav w3-right w3-hover-white w3-theme-d2\" href=\"javascript:void(0);\" onclick=\"openNav()\"><i class=\"fa fa-bars\"></i></a>\r\n  <a routerLink=\"/Mainpage\" class=\"w3-bar-item w3-button w3-teal\"><i class=\"fa fa-home w3-margin-right\"></i>Logo</a>\r\n  <a href=\"#team\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Team</a>\r\n  <a href=\"#work\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Work</a>\r\n  <a href=\"#pricing\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Price</a>\r\n  <a href=\"#contact\" class=\"w3-bar-item w3-button w3-hide-small w3-hover-white\">Contact</a>\r\n    <div class=\"w3-dropdown-hover w3-hide-small\">\r\n    <button class=\"w3-button\" title=\"Notifications\">Dropdown <i class=\"fa fa-caret-down\"></i></button>     \r\n    <div class=\"w3-dropdown-content w3-card-4 w3-bar-block\">\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n      <a href=\"#\" class=\"w3-bar-item w3-button\">Link</a>\r\n    </div>\r\n  </div>\r\n  <a [routerLink]=\"['/Login']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Login</a>\r\n  <a [routerLink]=\"['/Signup']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Signup</a>\r\n  <a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal\" title=\"Search\"><i class=\"fa fa-search\"></i></a>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ 520:
/***/ (function(module, exports) {

module.exports = "\r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n<div class=\"w3-row-padding w3-center w3-padding-16\" id=\"pricing\">\r\n   <h1>Login</h1> \r\n</div>\r\n    <form name=\"form\" (ngSubmit)=\"login()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Login</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/Signup']\" class=\"btn btn-link\">Signup</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 521:
/***/ (function(module, exports) {

module.exports = "\n<!-- Image Header -->\n<div class=\"w3-display-container w3-animate-opacity\">\n  <img src=\"../../assets/images/image6.jpg\" alt=\"\" style=\"width:100%;min-height:350px;max-height:600px;\">\n  <div class=\"w3-container w3-display-bottomleft w3-margin-bottom\">  \n    <button onclick=\"document.getElementById('id01').style.display='block'\" class=\"w3-button w3-xlarge w3-theme w3-hover-teal\" title=\"Go To W3.CSS\">BE THE BEST</button>\n  </div>\n</div>\n\n<!-- Sidebar on click -->\n<nav class=\"w3-sidebar w3-bar-block w3-white w3-card-2 w3-animate-left w3-xxlarge\" style=\"display:none;z-index:2\" id=\"mySidebar\">\n  <a href=\"javascript:void(0)\" onclick=\"w3_close()\" class=\"w3-bar-item w3-button w3-closenav w3-text-teal\">Close\n    <i class=\"fa fa-remove\"></i>\n  </a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 1</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 2</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 3</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 4</a>\n  <a href=\"#\" class=\"w3-bar-item w3-button\">Link 5</a>\n</nav>\n\n\n<!-- Pricing Row -->\n<div class=\"w3-row-padding w3-center w3-padding-64\" id=\"pricing\">\n    <h2>PRICING</h2>\n    <p>Choose a pricing plan that fits your needs.</p><br>\n   <div *ngFor=\"let Tutorial of Tutorials\"> \n    <div class=\"w3-third w3-margin-bottom\">\n      <ul class=\"w3-ul w3-border w3-hover-shadow\">\n        <li class=\"w3-theme\">\n          <img class=\"first-slide\" src={{Tutorial.image}} style=\"width:100%;min-height:350px;max-height:600px;\">\n          <p class=\"w3-xlarge\">{{Tutorial.tutorialname}}</p>\n        </li>\n        <li class=\"w3-padding-6\"><b>{{Tutorial.ownername}}</b> </li>\n        <li class=\"w3-padding-6\"><b>{{Tutorial.description}}</b> Emails</li>\n        <li class=\"w3-padding-6\"><b>{{Tutorial.duration}}</b> </li>\n        <li class=\"w3-padding-6\"><b>{{Tutorial.users}}</b> </li>\n        <li class=\"w3-padding-6\">\n          <h2 class=\"w3-wide\"><i></i></h2>\n          <span class=\"w3-opacity\">{{Tutorial.tutorialname}}</span>\n        </li>\n        <li class=\"w3-theme-l5 w3-padding-12\">\n          <button class=\"w3-button w3-teal w3-padding-large\"><i class=\"fa fa-check\"></i> Sign Up</button>\n        </li>\n      </ul>\n    </div>\n   </div> \n</div> \n\n\n\n\n\n<!-- Carousel -->\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\n  <!-- Indicators -->\n  <ol class=\"carousel-indicators\">\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\n  </ol>\n  <div class=\"carousel-inner\" role=\"listbox\">\n    <div class=\"item active\">\n      <img class=\"first-slide\" src=\"../../assets/images/image4.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"item\">\n          <img class=\"second-slide\" src=\"../../assets/images/image2.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"item\">\n          <img class=\"third-slide\" src=\"../../assets/images/image3.jpg\" alt=\"Third slide\">\n        </div>\n      </div>\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n      </a>\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n      </a>\n    </div><!-- /.carousel -->\n\n"

/***/ }),

/***/ 522:
/***/ (function(module, exports) {

module.exports = "  \r\n\r\n<div class=\"col-md-6 col-md-offset-3\">\r\n<div class=\"w3-row-padding w3-center w3-padding-16\" id=\"pricing\">\r\n   <h1>Signup</h1> \r\n</div>\r\n  <form name=\"form\" (ngSubmit)=\"Signup()\" #f=\"ngForm\" novalidate>\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" class=\"form-control\" name=\"username\" [(ngModel)]=\"model.username\" #username=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !username.valid\" class=\"help-block\">Username is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" class=\"form-control\" name=\"password\" [(ngModel)]=\"model.password\" #password=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"email\">email</label>\r\n            <input type=\"email\" class=\"form-control\" name=\"email\" [(ngModel)]=\"model.email\" #email=\"ngModel\" required />\r\n            <!--<div *ngIf=\"f.submitted && !password.valid\" class=\"help-block\">Password is required</div>-->\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <button [disabled]=\"loading\" class=\"btn btn-primary\">Submit</button>\r\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\r\n            <a [routerLink]=\"['/Login']\" class=\"btn btn-link\">Login</a>\r\n        </div>\r\n    </form>\r\n</div>\r\n"

/***/ }),

/***/ 523:
/***/ (function(module, exports) {

module.exports = "<p>\r\n  userpage works!\r\n</p>\r\n<div class=\"w3-top\">\r\n <div class=\"w3-bar w3-theme-d2 w3-left-align\">\r\n  <a (click)=\"logout()\" [routerLink]=\"['/']\" class=\"w3-bar-item w3-button w3-right w3-hide-small w3-hover-white\">Logout</a>\r\n  <a href=\"#\" class=\"w3-bar-item w3-button w3-hide-small w3-right w3-hover-teal\" title=\"Search\"><i class=\"fa fa-search\"></i></a>\r\n </div>\r\n</div>\r\n\r\n\r\n\r\n<div id=\"myCarousel\" class=\"carousel slide\" data-ride=\"carousel\">\r\n  <!-- Indicators -->\r\n  <ol class=\"carousel-indicators\">\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"0\" class=\"active\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"1\"></li>\r\n    <li data-target=\"#myCarousel\" data-slide-to=\"2\"></li>\r\n  </ol>\r\n  <div class=\"carousel-inner\" role=\"listbox\">\r\n    <div class=\"item active\">\r\n      <img class=\"first-slide\" src=\"../../assets/images/image4.jpg\" alt=\"First slide\">\r\n        </div>\r\n        <div class=\"item\">\r\n          <img class=\"second-slide\" src=\"../../assets/images/image2.jpg\" alt=\"Second slide\">\r\n        </div>\r\n        <div class=\"item\">\r\n          <img class=\"third-slide\" src=\"../../assets/images/image3.jpg\" alt=\"Third slide\">\r\n        </div>\r\n      </div>\r\n      <a class=\"left carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"prev\">\r\n        <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Previous</span>\r\n      </a>\r\n      <a class=\"right carousel-control\" href=\"#myCarousel\" role=\"button\" data-slide=\"next\">\r\n        <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n        <span class=\"sr-only\">Next</span>\r\n      </a>\r\n    </div><!-- /.carousel -->\r\n\r\n\r\n<h1>{{ id }}</h1>\r\n"

/***/ }),

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ })

},[541]);
//# sourceMappingURL=main.bundle.js.map