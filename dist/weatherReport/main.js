(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/splash-screen/splash-screen.component */ "./src/app/components/splash-screen/splash-screen.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_weather_data_weather_data_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/weather-data/weather-data.component */ "./src/app/components/weather-data/weather-data.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_2__["SplashScreenComponent"] },
    { path: 'signin', component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"] },
    { path: 'signup', component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"] },
    { path: 'weather-data', component: _components_weather_data_weather_data_component__WEBPACK_IMPORTED_MODULE_5__["WeatherDataComponent"] },
    { path: '**', component: _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/not-found/not-found.component */ "./src/app/components/not-found/not-found.component.ts");
/* harmony import */ var _components_weather_data_weather_data_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/weather-data/weather-data.component */ "./src/app/components/weather-data/weather-data.component.ts");
/* harmony import */ var _components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/splash-screen/splash-screen.component */ "./src/app/components/splash-screen/splash-screen.component.ts");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/components/sign-in/sign-in.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_6__["SignUpComponent"],
                _components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"],
                _components_weather_data_weather_data_component__WEBPACK_IMPORTED_MODULE_8__["WeatherDataComponent"],
                _components_splash_screen_splash_screen_component__WEBPACK_IMPORTED_MODULE_9__["SplashScreenComponent"],
                _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_10__["SignInComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/not-found/not-found.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  404 Page Not Found\n</p>\n"

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/not-found/not-found.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/not-found/not-found.component.ts ***!
  \*************************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/components/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/components/not-found/not-found.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\">Sign In</span>\n        </h1>\n        \n        <form #userSignInForm=\"ngForm\" (ngSubmit)=\"signinUser(userSignInForm)\">\n\n        \t<div *ngIf=\"signInError\" class=\"mismatchValueError\">\n\t        \tEmail and Password does not match.\n\t        </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              [ngClass]=\"{'is-invalid':userEmail.errors && userEmail.touched}\"\n              name=\"email\" \n              id=\"email\" \n              required \n              [(ngModel)]=\"userSignInDetails.email\"\n              #userEmail=\"ngModel\"\n              pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n            >\n            <div [hidden]=\"!userEmail.errors?.required\" class=\"invalid-feedback\">\n              Email is required\n            </div>\n            <div [hidden]=\"!userEmail.errors?.pattern\" class=\"invalid-feedback\">\n              Email is not valid.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input \n              type=\"password\" \n              class=\"form-control\" \n              [ngClass]=\"{'is-invalid':userPassword.errors && userPassword.touched}\"\n              name=\"password\" \n              id=\"password\" \n              required \n              [(ngModel)]=\"userSignInDetails.password\"\n              #userPassword=\"ngModel\"\n            >\n            <div [hidden]=\"!userPassword.errors?.required\" class=\"invalid-feedback\">\n              Password is required\n            </div>\n          </div>\n          <button [disabled]=\"!userSignInForm.form.valid\" class=\"btn btn-primary btn-block\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mismatchValueError {\n  color: #dc3545; }\n"

/***/ }),

/***/ "./src/app/components/sign-in/sign-in.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-in/sign-in.component.ts ***!
  \*********************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignInComponent = /** @class */ (function () {
    function SignInComponent(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.signInError = false;
        this.elementRef = elementRef;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.userSignInDetails = {
            email: '',
            password: ''
        };
    };
    SignInComponent.prototype.signinUser = function (_a) {
        var value = _a.value, valid = _a.valid;
        var storedEmail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('password');
        if ((value.email == storedEmail) && (value.password == storedPassword)) {
            this.signInError = false;
            this.router.navigateByUrl('weather-data');
        }
        else {
            this.signInError = true;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userForm'),
        __metadata("design:type", Object)
    ], SignInComponent.prototype, "form", void 0);
    SignInComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/components/sign-in/sign-in.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-6 mx-auto pt-4\">\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <h1 class=\"text-center pb-4 pt-3\">\n          <span class=\"text-primary\">Sign Up</span>\n        </h1>\n        <form #userForm=\"ngForm\" (ngSubmit)=\"signupUser(userForm)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name</label>\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              [ngClass]=\"{'is-invalid':userName.errors && userName.touched}\"\n              name=\"name\" \n              id=\"name\" \n              required \n              [(ngModel)]=\"userDetails.name\"\n              #userName=\"ngModel\"\n            >\n            <div [hidden]=\"!userName.errors?.required\" class=\"invalid-feedback\">\n              Name is required.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"email\">Email</label>\n            <input \n              type=\"text\" \n              class=\"form-control\" \n              [ngClass]=\"{'is-invalid':userEmail.errors && userEmail.touched}\"\n              name=\"email\" \n              id=\"email\" \n              required \n              [(ngModel)]=\"userDetails.email\"\n              #userEmail=\"ngModel\"\n              pattern=\"[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\"\n            >\n            <div [hidden]=\"!userEmail.errors?.required\" class=\"invalid-feedback\">\n              Email is required\n            </div>\n            <div [hidden]=\"!userEmail.errors?.pattern\" class=\"invalid-feedback\">\n              Email is not valid.\n            </div>\n          </div>\n          <div class=\"form-group\">\n            <label for=\"password\">Password</label>\n            <input \n              type=\"password\" \n              class=\"form-control\" \n              [ngClass]=\"{'is-invalid':userPassword.errors && userPassword.touched}\"\n              name=\"password\" \n              id=\"password\" \n              required \n              [(ngModel)]=\"userDetails.password\"\n              #userPassword=\"ngModel\"\n              minlength=\"5\" \n            >\n            <div [hidden]=\"!userPassword.errors?.required\" class=\"invalid-feedback\">\n              Password is required\n            </div>\n            <div [hidden]=\"!userPassword.errors?.minlength\" class=\"invalid-feedback\">\n              Must be at least 5 characters.\n            </div>\n          </div>\n          <!-- <div class=\"form-group\">\n            <div><label for=\"uploadUserImage\">Select User Image</label></div>\n            <div>\n              <input type=\"file\" src=\" \" id=\"uploadUserImage\" crossOrigin='Anonymous' (change)=\"readURL(this)\"/>\n            </div>\n            <img src=\"\" id=\"userImage\" width=\"300\" height=\"227\">\n          </div> -->\n          <button [disabled]=\"!userForm.form.valid\" class=\"btn btn-primary btn-block\">Submit</button>\n        </form>\n\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#userImage {\n  display: none; }\n"

/***/ }),

/***/ "./src/app/components/sign-up/sign-up.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/sign-up/sign-up.component.ts ***!
  \*********************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(router, elementRef) {
        this.router = router;
        this.elementRef = elementRef;
        this.elementRef = elementRef;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.userDetails = {
            name: '',
            email: '',
            password: ''
        };
        var storedName = localStorage.getItem('name');
        var storedEmail = localStorage.getItem('email');
        var storedPassword = localStorage.getItem('password');
        if (storedName && storedEmail && storedPassword) {
            this.router.navigateByUrl('weather-data');
        }
    };
    SignUpComponent.prototype.signupUser = function (_a) {
        var value = _a.value, valid = _a.valid;
        if (!valid) {
            console.log("form is not valid"); //This will never be printed coz of validation at client end
        }
        else {
            var storedName = localStorage.getItem('name');
            var storedEmail = localStorage.getItem('email');
            var storedPassword = localStorage.getItem('password');
            if (storedName && storedEmail && storedPassword) {
                this.router.navigateByUrl('weather-data');
            }
            else {
                var name_1 = value.name;
                var email = value.email;
                var password = value.password;
                localStorage.setItem('name', name_1);
                localStorage.setItem('email', email);
                localStorage.setItem('password', password);
                this.router.navigateByUrl('weather-data');
            }
        }
    };
    SignUpComponent.prototype.readURL = function (input) {
        this.elementRef.nativeElement.querySelector("#userImage").style.display = "block";
        var that = this;
        var imgObj = that.elementRef.nativeElement.querySelector('#uploadUserImage');
        if (imgObj.files && imgObj.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                var targetObj = e.target;
                that.elementRef.nativeElement.querySelector('#userImage').src = targetObj.result;
            }.bind(this);
            reader.readAsDataURL(imgObj.files[0]);
        }
        var userProfileImage = this.elementRef.nativeElement.querySelector('#userImage');
        var imgData = this.getBase64Image(userProfileImage);
        localStorage.setItem("imgData", imgData);
    };
    SignUpComponent.prototype.getBase64Image = function (img) {
        var canvas = document.createElement("canvas");
        canvas.width = 300;
        canvas.height = 227;
        var ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        var dataURL = canvas.toDataURL("image/png");
        return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('userForm'),
        __metadata("design:type", Object)
    ], SignUpComponent.prototype, "form", void 0);
    SignUpComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/components/sign-up/sign-up.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ }),

/***/ "./src/app/components/splash-screen/splash-screen.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"splashScreen\">\n  <div class=\"splashInstruction\">Sign-Up/Sign-In to view the Weather Report!!</div>\n  <div class=\"loading\">\n    <div class=\"dot\" id=\"dot1\"></div>\n    <div class=\"dot\" id=\"dot2\"></div>\n    <div class=\"dot\" id=\"dot3\"></div>\n    <div class=\"dot\" id=\"dot4\"></div>\n    <div class=\"dot\" id=\"dot5\"></div>\n    <div class=\"row\">\n\t\t  <div class=\"col-md-3 mx-auto pt-4\">\n\t\t    <button class=\"btn btn-secondary btn-block\" (click)=\"signUpPage()\">Continue -> </button>\n\t\t\t</div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/splash-screen/splash-screen.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".splashScreen {\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  z-index: 1;\n  top: 0;\n  left: 0;\n  background-color: #007bff;\n  transition: opacity 3s;\n  opacity: 1; }\n\n.splashInstruction {\n  color: #FFFFFF;\n  font-size: 24px;\n  text-align: center;\n  position: relative;\n  top: 50%;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n\n.loading {\n  height: 20px;\n  position: relative;\n  top: 50%;\n  /* border: 1px solid #ddd; */ }\n\n.dot {\n  width: 4px;\n  height: 4px;\n  left: -10%;\n  margin: auto;\n  border-radius: 5px;\n  background: white;\n  position: absolute; }\n\n#dot1 {\n  -webkit-animation: dotslide 2.8s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2);\n          animation: dotslide 2.8s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2); }\n\n#dot2 {\n  -webkit-animation: dotslide 2.8s 0.2s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2);\n          animation: dotslide 2.8s 0.2s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2); }\n\n#dot3 {\n  -webkit-animation: dotslide 2.8s 0.4s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2);\n          animation: dotslide 2.8s 0.4s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2); }\n\n#dot4 {\n  -webkit-animation: dotslide 2.8s 0.6s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2);\n          animation: dotslide 2.8s 0.6s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2); }\n\n#dot5 {\n  -webkit-animation: dotslide 2.8s 0.8s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2);\n          animation: dotslide 2.8s 0.8s infinite cubic-bezier(0.2, 0.8, 0.8, 0.2); }\n\n@-webkit-keyframes dotslide {\n  0% {\n    left: -20%; }\n  100% {\n    left: 110%; } }\n\n@keyframes dotslide {\n  0% {\n    left: -20%; }\n  100% {\n    left: 110%; } }\n"

/***/ }),

/***/ "./src/app/components/splash-screen/splash-screen.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/splash-screen/splash-screen.component.ts ***!
  \*********************************************************************/
/*! exports provided: SplashScreenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SplashScreenComponent", function() { return SplashScreenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SplashScreenComponent = /** @class */ (function () {
    function SplashScreenComponent(router) {
        this.router = router;
    }
    SplashScreenComponent.prototype.ngOnInit = function () {
        var _this = this;
        setTimeout(function (router) {
            _this.router.navigateByUrl('signup');
        }, 5000);
    };
    SplashScreenComponent.prototype.signUpPage = function () {
        this.router.navigateByUrl('signup');
    };
    SplashScreenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'splash-screen',
            template: __webpack_require__(/*! ./splash-screen.component.html */ "./src/app/components/splash-screen/splash-screen.component.html"),
            styles: [__webpack_require__(/*! ./splash-screen.component.scss */ "./src/app/components/splash-screen/splash-screen.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], SplashScreenComponent);
    return SplashScreenComponent;
}());



/***/ }),

/***/ "./src/app/components/weather-data/weather-data.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-data/weather-data.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-primary mb-4\">\n\t<div class=\"container\">\n    <div class=\"weatherHeader\">Weather Details</div>\n  </div>\n  <button id=\"butLogout\" class=\"headerButton\" aria-label=\"logout\" (click)=\"logout()\"></button>\n</nav>\n\n<div class=\"row justify-content-md-center\">\n  <div class=\"col-md-10\">\n    \n    <!-- <img src=\"\" id=\"userProfileImage\"/> -->\n    <div class=\"card\">\n      <div class=\"card-body\">\n        <div class=\"userName ml-2\">Hi {{userName}}</div>\n        <div class=\"row ml-2\">\n          <div class=\"infoToStart mb-3\">Click on Add a city to get the forecast details for the city!!</div>\n        </div>\n        <div class=\"row ml-2 mb-3\">\n          <button (click)=\"toggleHide()\" class=\"btn btn-dark btn-sm\">Add a City</button>\n          <span *ngIf = \"searchBox\" class=\"ml-4\">\n            <input id=\"txtPlaces\" type=\"text\" placeholder=\"Enter a location\" size=45>  \n          </span>\n        </div>\n        <!-- <div *ngIf = \"detailsFetched\"> -->\n          <ng-template ngFor let-item [ngForOf]=\"weatherData\" let-i=\"index\">\n            <div class=\"container\">\n              <div class=\"card\">\n                <div class=\"card-body\">\n                  <div class=\"row text-center\">\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"citySelected\">{{item.name}}</div>      \n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"weatherDetails\">{{item.humidity}}</div>      \n                      <div class=\"weatherCategory\">Humidity</div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"weatherDetails\">{{item.pressure}}</div>    \n                      <div class=\"weatherCategory\">Pressure</div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"weatherDetails\">{{item.temp | number:'1.0-0'}}&#8451;</div>    \n                      <div class=\"weatherCategory\">Temperature</div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"weatherDetails\">{{item.temp_max | number:'1.0-0'}}&#8451;</div>\n                      <div class=\"weatherCategory\">Max. Temp</div>\n                    </div>\n                    <div class=\"col-sm-12 col-md-2\">\n                      <div class=\"weatherDetails\">{{item.temp_min | number:'1.0-0'}}&#8451;</div>\n                      <div class=\"weatherCategory\">Min. Temp</div>\n                    </div>\n                  </div>  \n                </div>\n              </div>\n            </div>\n          </ng-template>\n        <!-- </div> -->\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/weather-data/weather-data.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/weather-data/weather-data.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".weatherHeader {\n  font-size: 24px;\n  color: white;\n  padding: 10px 0; }\n\n.headerButton {\n  width: 50px;\n  height: 50px;\n  margin-right: 16px;\n  text-indent: -30000px;\n  overflow: hidden;\n  opacity: 0.7;\n  transition: opacity 0.333s cubic-bezier(0, 0, 0.21, 1);\n  border: none;\n  outline: none;\n  cursor: pointer; }\n\n#butLogout {\n  background: url(\"data:image/svg+xml,%3C%3Fxml version%3D%221.0%22 encoding%3D%22UTF-8%22%3F%3E%3Csvg width%3D%2222px%22 height%3D%2223px%22 viewBox%3D%220 0 22 23%22 version%3D%221.1%22 xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22 xmlns%3Axlink%3D%22http%3A%2F%2Fwww.w3.org%2F1999%2Fxlink%22%3E    %3C!-- Generator%3A Sketch 49.2 (51160) - http%3A%2F%2Fwww.bohemiancoding.com%2Fsketch --%3E    %3Ctitle%3Enoun_52714_cc%3C%2Ftitle%3E    %3Cdesc%3ECreated with Sketch.%3C%2Fdesc%3E    %3Cdefs%3E%3C%2Fdefs%3E    %3Cg id%3D%22Page-1%22 stroke%3D%22none%22 stroke-width%3D%221%22 fill%3D%22none%22 fill-rule%3D%22evenodd%22%3E        %3Cg id%3D%22noun_52714_cc%22 fill%3D%22%23FFFFFF%22 fill-rule%3D%22nonzero%22%3E            %3Cpath d%3D%22M7.44600986%2C0 L7.44600986%2C2.22592813 L19.9207327%2C2.22592813 L19.9207327%2C20.7740719 L7.44600986%2C20.7740719 L7.44600986%2C23 L22%2C23 L22%2C0.000471495049 L7.44600986%2C0.000471495049 L7.44600986%2C0 Z M3.80762243%2C8.3237736 C3.77503065%2C8.33414649 3.73407072%2C8.35630676 3.69971722%2C8.39355487 L0.10405145%2C11.2687317 C-0.0346838167%2C11.4172526 -0.0346838167%2C11.5841619 0.10405145%2C11.7322113 L3.69971722%2C14.6073881 C3.83845249%2C14.7559091 3.98115162%2C14.6913142 3.98115162%2C14.4678256 L3.98115162%2C12.6129641 L14.3766072%2C12.6129641 L14.3766072%2C10.3870359 L3.98071119%2C10.3870359 L3.98071119%2C8.53217441 C3.98071119%2C8.36526516 3.90539776%2C8.29265493 3.80762243%2C8.3237736 Z%22 id%3D%22Shape%22%3E%3C%2Fpath%3E        %3C%2Fg%3E    %3C%2Fg%3E%3C%2Fsvg%3E\") center center no-repeat; }\n\n.citySelected {\n  font-size: 24px; }\n\n.weatherDetails {\n  font-size: 20px; }\n\n.weatherCategory {\n  font-size: 16px; }\n"

/***/ }),

/***/ "./src/app/components/weather-data/weather-data.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/weather-data/weather-data.component.ts ***!
  \*******************************************************************/
/*! exports provided: WeatherDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WeatherDataComponent", function() { return WeatherDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var WeatherDataComponent = /** @class */ (function () {
    function WeatherDataComponent(cdr, elementRef, http, router) {
        this.cdr = cdr;
        this.elementRef = elementRef;
        this.http = http;
        this.router = router;
        this.humidity = 0;
        this.pressure = 0;
        this.temp = 0;
        this.temp_max = 0;
        this.temp_min = 0;
        this.searchBox = false;
        this.detailsFetched = false;
        this.weatherData = [];
        this.elementRef = elementRef;
    }
    WeatherDataComponent.prototype.ngOnInit = function () {
        this.userName = localStorage.getItem('name');
        this.weatherData = JSON.parse(localStorage.getItem("weatherReportDetail"));
        console.log(this.weatherData, 'weatherDataExists');
        if (!this.userName) {
            this.router.navigateByUrl('/signup');
        }
        var dataImage = localStorage.getItem('imgData');
        console.log(dataImage);
        var userImage = this.elementRef.nativeElement.querySelector('#userProfileImage');
        //userImage.src = "data:image/png;base64," + dataImage;
    };
    WeatherDataComponent.prototype.getWeatherData = function (city) {
        var _this = this;
        this.http.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=43b9e8c04ab96f4ecce7d6d1fd45b859").
            subscribe(function (data) {
            _this.displayWeatherDetails(data);
        });
    };
    WeatherDataComponent.prototype.autocomplete = function () {
        var _this = this;
        var places = new google.maps.places.Autocomplete(this.elementRef.nativeElement.querySelector('#txtPlaces'));
        google.maps.event.addListener(places, 'place_changed', function () {
            var address = places.getPlace().formatted_address;
            var value = address.split(",");
            var count = value.length;
            var city = value[count - 3];
            _this.getWeatherData(city);
        });
    };
    WeatherDataComponent.prototype.getLocation = function () {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.showPosition);
        }
        else {
            console.log("Geolocation is not supported by this browser.");
        }
    };
    WeatherDataComponent.prototype.showPosition = function (position) {
        var geocoder = new google.maps.Geocoder;
        var latlng = {
            lat: parseFloat(position.coords.latitude),
            lng: parseFloat(position.coords.longitude)
        };
        geocoder.geocode({
            'location': latlng
        }, function (results, status) {
            if (status === 'OK') {
                if (results[0]) {
                    console.log(results, "result of geocoder");
                }
                else {
                    console.log('No results found');
                }
            }
            else {
                console.log('Geocoder failed due to: ' + status);
            }
        });
    };
    WeatherDataComponent.prototype.logout = function () {
        localStorage.clear();
        this.router.navigateByUrl('/');
    };
    WeatherDataComponent.prototype.toggleHide = function () {
        this.searchBox = !this.searchBox;
        window.googleMapsReady = this.autocomplete.bind(this);
        var script = document.createElement("script");
        script.type = "text/javascript";
        document.getElementsByTagName("head")[0].appendChild(script);
        script.src = "https://maps.googleapis.com/maps/api/js?key=AIzaSyD1VrN_wtyp9e4hfkhSI3pDYYr1hrI-AcA&sensor=false&libraries=places&callback=googleMapsReady";
        this.getLocation();
    };
    WeatherDataComponent.prototype.displayWeatherDetails = function (weatherDetails) {
        this.detailsFetched = true;
        this.weather = weatherDetails.weather[0].main;
        var weatherReportDetail = [{
                "name": weatherDetails.name,
                "humidity": weatherDetails.main.humidity,
                "pressure": weatherDetails.main.pressure,
                "temp": weatherDetails.main.temp - 273.15,
                "temp_max": weatherDetails.main.temp_max - 273.15,
                "temp_min": weatherDetails.main.temp_min - 273.15
            }];
        var stored = JSON.parse(localStorage.getItem("weatherReportDetail"));
        if (stored != null) {
            var isPresent = false;
            for (var i = 0; i < stored.length; i++) {
                if (stored[i].name == weatherDetails.name) {
                    isPresent = true;
                    break;
                }
            }
            if (!isPresent) {
                stored.push({
                    "name": weatherDetails.name,
                    "humidity": weatherDetails.main.humidity,
                    "pressure": weatherDetails.main.pressure,
                    "temp": weatherDetails.main.temp - 273.15,
                    "temp_max": weatherDetails.main.temp_max - 273.15,
                    "temp_min": weatherDetails.main.temp_min - 273.15
                });
                localStorage.setItem("weatherReportDetail", JSON.stringify(stored));
            }
        }
        else {
            localStorage.setItem("weatherReportDetail", JSON.stringify(weatherReportDetail));
        }
        var result = JSON.parse(localStorage.getItem("weatherReportDetail"));
        this.weatherData = result;
        //To detect changes
        this.cdr.detectChanges();
    };
    WeatherDataComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'weather-data',
            template: __webpack_require__(/*! ./weather-data.component.html */ "./src/app/components/weather-data/weather-data.component.html"),
            styles: [__webpack_require__(/*! ./weather-data.component.scss */ "./src/app/components/weather-data/weather-data.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], WeatherDataComponent);
    return WeatherDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/abhilash/Documents/webDevelopment/weatherAngular6/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map