webpackJsonp([34],{

/***/ 1036:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratulationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Congratulation Page Component
 * File path - '../../src/pages/congratulation/congratulation'
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


var CongratulationPage = /** @class */ (function () {
    function CongratulationPage(navCtrl, navParams, viewCtrl, appCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.appCtrl = appCtrl;
    }
    /***
     * --------------------------------------------------------------
     * Dismiss Modal
     * --------------------------------------------------------------
     * @method    dismiss
     */
    CongratulationPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
        this.appCtrl.getRootNav().setRoot('HomePage');
    };
    CongratulationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-congratulation',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\congratulation\congratulation.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Congratulation Page  -->\n\n<!-- Header  -->\n<ion-header no-border>\n  <ion-navbar transparent>\n    <ion-buttons right>\n      <!-- Modal Close Button  -->\n      <button ion-button color="white" (click)="dismiss()">\n        <ion-icon name="close"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<!-- Content  -->\n<ion-content fullscreen>\n  <p class="title">Congratulations</p>\n  <div class="contents">\n    <p class="sub-title">Thank you for booking with us. We have received your booking request successfully. Please check your email inbox for\n      further details.\n    </p>\n    <p>If you further inquiries, please don’t hesitate to contact us.</p>\n  </div>\n</ion-content>\n\n<!-- Footer  -->\n<ion-footer>\n  <button ion-button clear type="button" color="white" (click)="dismiss()">\n      close\n  </button>\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\congratulation\congratulation.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["App"]])
    ], CongratulationPage);
    return CongratulationPage;
}());

//# sourceMappingURL=congratulation.js.map

/***/ }),

/***/ 986:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CongratulationPageModule", function() { return CongratulationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__congratulation__ = __webpack_require__(1036);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CongratulationPageModule = /** @class */ (function () {
    function CongratulationPageModule() {
    }
    CongratulationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__congratulation__["a" /* CongratulationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__congratulation__["a" /* CongratulationPage */]),
            ],
        })
    ], CongratulationPageModule);
    return CongratulationPageModule;
}());

//# sourceMappingURL=congratulation.module.js.map

/***/ })

});
//# sourceMappingURL=34.js.map