webpackJsonp([37],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignUpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_services__ = __webpack_require__(117);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Sign Up Component
 * File path - '../../../src/pages/authentication/sign-up/sign-up'
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignUpPage = /** @class */ (function () {
    function SignUpPage(navCtrl, navParams, formBuilder, auth, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        // Email Validation Regex Patter
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.menuCtrl.enable(false); // Disable SideMenu
    }
    /** Do any initialization */
    SignUpPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method    formValidation    This function build a Registration form with validation
     *
     */
    SignUpPage.prototype.formValidation = function () {
        this.registrationForm = this.formBuilder.group({
            name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.emailPattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    /**
     * --------------------------------------------------------------
     * Registration Action
     * --------------------------------------------------------------
     * @method doRegistration    Registration action just redirect to your home page.
     *
     * ** You can call any backend API into this function. **
     */
    SignUpPage.prototype.doRegistration = function () {
        this.navCtrl.setRoot('HomePage');
    };
    /**
     * --------------------------------------------------------------
     * Go To Login Page
     * --------------------------------------------------------------
     * @method goToLoginPage    This action button just redirect to your login page.
     */
    SignUpPage.prototype.goToLoginPage = function () {
        this.navCtrl.setRoot('SignInPage');
    };
    SignUpPage.prototype.registerUser = function () {
        var _this = this;
        console.log("=======");
        var data = this.registrationForm.value;
        var credentials = {
            email: data.email,
            password: data.password
        };
        console.log("222222"),
            this.auth.signUp(credentials).then(function () { return _this.navCtrl.setRoot('HomePage'); }, function (error) { return _this.signupError = error.message; });
        console.log("44444");
    };
    SignUpPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-up',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\sign-up\sign-up.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n\n<!-- Registration Page -->\n\n<ion-content>\n  <div class="container">\n\n    <!-- Title of Page  -->\n    <div class="top-content" text-center>\n      <div class="animated fadeInDown title">SIGN UP</div>\n    </div>\n    {{signupError}}\n    <!-- Sign Up Form  -->\n    <div class="form-content">\n\n      <form class="animated slideInUp" [formGroup]="registrationForm">\n        <ion-list>\n\n          <!-- User Name -->\n          <ion-item>\n            <ion-label>\n              <ion-icon ios="ios-person" md="md-person" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="text" placeholder="Your Name" name="name" formControlName="name" [(ngModel)]="registrationForm.name" [class.invalid]="!registrationForm.controls.name.valid && registrationForm.controls.name.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Name Validation Message  -->\n          <div class="error-message" *ngIf="!registrationForm.controls.name.valid  && registrationForm.controls.name.dirty">\n            <p>Please enter a valid name.</p>\n          </div>\n\n          <!-- Email Address -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-mail" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="email" placeholder="Your Email Address" name="email" formControlName="email" [(ngModel)]="registrationForm.email"\n              [class.invalid]="!registrationForm.controls.email.valid && registrationForm.controls.email.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Email Validation Message  -->\n          <div class="error-message" *ngIf="!registrationForm.controls.email.valid  && registrationForm.controls.email.dirty">\n            <p>Please enter a valid email address.</p>\n          </div>\n\n          <!-- Password -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-eye" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="password" placeholder="Your Password" name="password" formControlName="password" [(ngModel)]="registrationForm.password"\n              [class.invalid]="!registrationForm.controls.password.valid && registrationForm.controls.password.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Password Validation Message  -->\n          <div class="error-message" *ngIf="!registrationForm.controls.password.valid  && registrationForm.controls.password.dirty">\n            <p>Please enter a valid password.</p>\n          </div>\n        </ion-list>\n\n        <!-- Sign Up Button  -->\n        <button ion-button round block type="button" class="custom-btn" (tap)="registerUser()" (click)="registerUser()">\n            Sign Up\n        </button>\n\n        <!-- Sign In Button  -->\n        <ion-row justify-content-center align-items-center>\n          <button ion-button clear type="button" color="color3" (tap)="goToLoginPage()" (click)="goToLoginPage()">\n              Already have an account? Sign In\n          </button>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\sign-up\sign-up.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], SignUpPage);
    return SignUpPage;
}());

//# sourceMappingURL=sign-up.js.map

/***/ }),

/***/ 975:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpPageModule", function() { return SignUpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sign_up__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignUpPageModule = /** @class */ (function () {
    function SignUpPageModule() {
    }
    SignUpPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__sign_up__["a" /* SignUpPage */]),
            ],
        })
    ], SignUpPageModule);
    return SignUpPageModule;
}());

//# sourceMappingURL=sign-up.module.js.map

/***/ })

});
//# sourceMappingURL=37.js.map