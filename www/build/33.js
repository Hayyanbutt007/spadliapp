webpackJsonp([33],{

/***/ 1001:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageModule", function() { return LandingPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__landing__ = __webpack_require__(1051);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LandingPageModule = /** @class */ (function () {
    function LandingPageModule() {
    }
    LandingPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__landing__["a" /* LandingPage */]),
            ],
        })
    ], LandingPageModule);
    return LandingPageModule;
}());

//# sourceMappingURL=landing.module.js.map

/***/ }),

/***/ 1051:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LandingPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Landing Page Component
 * File path - '../../src/pages/landing/landing'
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


var LandingPage = /** @class */ (function () {
    function LandingPage(navCtrl, navParams, menuCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.menuCtrl = menuCtrl;
        this.slideIndex = 0;
        // Slider Data
        this.slides = [
            {
                text: 'Your All Time Trusted Travel Partner, Over Thousand of Happy Client',
                imageUrl: 'assets/imgs/background/img3.jpeg',
            },
            {
                text: 'Find the best deals of Flight, Hotels, Car, Bus, Train, Vacation, Cruise and Activities',
                imageUrl: 'assets/imgs/background/img1.jpeg'
            },
            {
                text: 'Filter for reviews, star categories, ratings and much more',
                imageUrl: 'assets/imgs/background/img4.jpeg',
            },
            {
                text: 'Book the best trip on your demand',
                imageUrl: 'assets/imgs/background/img2.jpeg',
            }
        ];
        this.menuCtrl.enable(false); // Disable SideMenu
    }
    LandingPage.prototype.onSlideChanged = function () {
        this.slideIndex = this.slider.getActiveIndex();
    };
    /**
     * -------------------------------------------------------------
     * Go to Home Page
     * -------------------------------------------------------------
     */
    LandingPage.prototype.goToHomePage = function () {
        this.navCtrl.setRoot('HomePage');
    };
    /**
     * -------------------------------------------------------------
     * Go to Sign In Page
     * -------------------------------------------------------------
     */
    LandingPage.prototype.goToSignInPage = function () {
        this.navCtrl.setRoot('SignInPage');
    };
    /**
     * -------------------------------------------------------------
     * Go to Sign Up Page
     * -------------------------------------------------------------
     */
    LandingPage.prototype.goToSignUpPage = function () {
        this.navCtrl.setRoot('SignUpPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], LandingPage.prototype, "slider", void 0);
    LandingPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-landing',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\landing\landing.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Langding Page  -->\n\n<!-- Header  -->\n<ion-header no-border>\n  <ion-navbar transparent>\n    <!-- Skip Button  -->\n    <ion-buttons right>\n      <button ion-button color="light" *ngIf="slideIndex < slides.length - 1" (click)="goToHomePage()">SKIP</button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- Content  -->\n<ion-content fullscreen="true" class="container">\n\n  <!-- Slider  -->\n  <ion-slides #slider pager="true" autoplay="3000" (ionSlideWillChange)="onSlideChanged()">\n    <!-- Landing Page Infos  -->\n    <ion-slide *ngFor="let slide of slides" class="slide-background" [ngStyle]="{\'background-image\': \'url(\' + slide.imageUrl +\')\'}">\n      <div class="slide-text-content">\n\n        <!-- Company Info  -->\n        <div class="company-info animated fadeInDown">\n\n          <!-- Logo  -->\n          <img src="assets/imgs/logo.png">\n\n          <!-- Company Name  -->\n          <h2>Travel Agency</h2>\n\n          <!-- Some Text  -->\n          <div class="slide-text">\n            <p padding>{{slide.text}}</p>\n          </div>\n        </div>\n      </div>\n    </ion-slide>\n  </ion-slides>\n\n  <!-- Buttons  -->\n  <div class="floating-buttons" *ngIf="slideIndex >= slides.length - 1">\n    <div class="btn-container">\n\n      <!-- Social Buttons  -->\n      <ion-row justify-content-center align-items-center class="animated fadeInUp">\n        <!-- Facebook  -->\n        <button ion-fab mini color="white" class="custom-btn">\n            <span class="fa fa-facebook facebook" aria-hidden="true"></span>\n          </button>\n        <!-- Google  -->\n        <button ion-fab mini color="white" class="custom-btn">\n            <span class="fa fa-google google" aria-hidden="true"></span>\n          </button>\n        <!-- Twitter  -->\n        <button ion-fab mini color="white" class="custom-btn">\n            <span class="fa fa-twitter twitter" aria-hidden="true"></span>\n          </button>\n      </ion-row>\n\n      <!-- SignIn/Login Button  -->\n      <ion-row justify-content-center align-items-center class="animated fadeInRight">\n        <button ion-button color="white" class="custom-btn login" (tap)="goToSignInPage()">SIGN IN</button>\n      </ion-row>\n\n      <!-- Sign Up Button  -->\n      <ion-row justify-content-center align-items-center class="animated fadeInRight">\n        <button ion-button clear color="white" (tap)="goToSignUpPage()">Create an Account</button>\n      </ion-row>\n\n      <!-- Skip Button  -->\n      <ion-row justify-content-center align-items-center class="animated fadeInRight">\n        <button ion-button clear color="white" (tap)="goToHomePage()">Skip</button>\n      </ion-row>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\landing\landing.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"]])
    ], LandingPage);
    return LandingPage;
}());

//# sourceMappingURL=landing.js.map

/***/ })

});
//# sourceMappingURL=33.js.map