webpackJsonp([37],{

/***/ 1025:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ForgetPasswordPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(22);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Forget Password Component
 * File path - '../../../src/pages/authentication/forget-password/forget-password'
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



var ForgetPasswordPage = /** @class */ (function () {
    function ForgetPasswordPage(navCtrl, navParams, formBuilder, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.menuCtrl = menuCtrl;
        // Email Validation Regex Patter
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.menuCtrl.enable(false); // Disable SideMenu
    }
    /** Do any initialization */
    ForgetPasswordPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method    formValidation    This function build a Forget Password Form with validation
     *
     */
    ForgetPasswordPage.prototype.formValidation = function () {
        this.forgetPasswordForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].pattern(this.emailPattern), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["Validators"].required])]
        });
    };
    /**
     * --------------------------------------------------------------
     * Forget Password Action
     * --------------------------------------------------------------
     * @method resetPassword    Forget Password action just redirect to your home page.
     *
     * ** You can call any backend API into this function. **
     */
    ForgetPasswordPage.prototype.resetPassword = function () {
        this.navCtrl.setRoot('HomePage');
    };
    /**
     * --------------------------------------------------------------
     * Skip Action
     * --------------------------------------------------------------
     * @method goToLandingPage    This action just redirect to your landing page.
     *
     */
    ForgetPasswordPage.prototype.goToLandingPage = function () {
        this.navCtrl.setRoot('LandingPage');
    };
    ForgetPasswordPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-forget-password',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\forget-password\forget-password.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Forget Password Page -->\n\n<ion-content>\n  <div class="container">\n\n    <!-- Title of Page  -->\n    <div class="top-content" text-center>\n      <div class="animated fadeInDown title">FORGET PASSWORD</div>\n    </div>\n\n    <!-- Forget Password Form  -->\n    <div class="form-content">\n\n      <form class="animated zoomIn" [formGroup]="forgetPasswordForm">\n        <ion-list>\n\n          <!-- Email Address -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-mail" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="email" placeholder="Your Email Address" name="email" formControlName="email" [(ngModel)]="forgetPasswordForm.email"\n              [class.invalid]="!forgetPasswordForm.controls.email.valid && forgetPasswordForm.controls.email.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Email Validation Message  -->\n          <div class="error-message" *ngIf="!forgetPasswordForm.controls.email.valid  && forgetPasswordForm.controls.email.dirty">\n            <p>Please enter a valid email address.</p>\n          </div>\n        </ion-list>\n\n        <!-- Reset Password Button  -->\n        <button ion-button round block type="button" class="custom-btn" (tap)="resetPassword()">\n            Submit\n        </button>\n\n        <!-- Skip Button  -->\n        <ion-row justify-content-center align-items-center>\n          <button ion-button clear color="color2" (tap)="goToLandingPage()">Skip</button>\n        </ion-row>\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\forget-password\forget-password.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], ForgetPasswordPage);
    return ForgetPasswordPage;
}());

//# sourceMappingURL=forget-password.js.map

/***/ }),

/***/ 976:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgetPasswordPageModule", function() { return ForgetPasswordPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__forget_password__ = __webpack_require__(1025);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ForgetPasswordPageModule = /** @class */ (function () {
    function ForgetPasswordPageModule() {
    }
    ForgetPasswordPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__forget_password__["a" /* ForgetPasswordPage */]),
            ],
        })
    ], ForgetPasswordPageModule);
    return ForgetPasswordPageModule;
}());

//# sourceMappingURL=forget-password.module.js.map

/***/ })

});
//# sourceMappingURL=37.js.map