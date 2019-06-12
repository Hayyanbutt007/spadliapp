webpackJsonp([35],{

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarSliderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(208);
/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
*
* This File Represent List of Cars for Slider View Component
* File path - '../../src/pages/car/car-tabs/car-slider/car-slider'
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




var CarSliderPage = /** @class */ (function () {
    function CarSliderPage(navCtrl, navParams, dataProvider, modalCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataProvider = dataProvider;
        this.modalCtrl = modalCtrl;
        // Array list of Cars
        this.cars = [];
    }
    /** Do any initialization */
    CarSliderPage.prototype.ngOnInit = function () {
        this.getCarList();
    };
    CarSliderPage.prototype.ngAfterViewInit = function () {
        this.slider.freeMode = true;
    };
    // Get List of Cars
    CarSliderPage.prototype.getCarList = function () {
        this.cars = this.dataProvider.getCarList();
    };
    /**
     * Open Car Details Page
     */
    CarSliderPage.prototype.viewDetails = function (carDetails) {
        this.modalCtrl.create('CarDetailsPage', { carDetails: carDetails }).present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], CarSliderPage.prototype, "slider", void 0);
    CarSliderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-car-slider',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\car\car-tabs\car-slider\car-slider.html"*/'<!-- Slider View of Car List  -->\n<ion-content padding>\n  <ion-slides padding-left padding-right #slider slidesPerView="1.2" loop="true" effect="slide" autoplay="5000" style="direction:ltr">\n    <!-- List of Cars  -->\n    <ion-slide *ngFor="let car of cars">\n      <ion-card padding>\n\n        <!-- Car Name  -->\n        <p class="car-name">{{car.name}}</p>\n\n        <!-- Car Type  -->\n        <p class="car-type">\n          <ion-badge item-end color="color2">{{car.carType}}</ion-badge>\n        </p>\n        <!-- Car Image  -->\n        <img [src]="car.image" imageViewer>\n\n        <!-- Select Option Button  -->\n        <button ion-button block class="custom-btn" (tap)="viewDetails(car)">Select</button>\n      </ion-card>\n    </ion-slide>\n  </ion-slides>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\car\car-tabs\car-slider\car-slider.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], CarSliderPage);
    return CarSliderPage;
}());

//# sourceMappingURL=car-slider.js.map

/***/ }),

/***/ 983:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarSliderPageModule", function() { return CarSliderPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_slider__ = __webpack_require__(1033);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CarSliderPageModule = /** @class */ (function () {
    function CarSliderPageModule() {
    }
    CarSliderPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_slider__["a" /* CarSliderPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__car_slider__["a" /* CarSliderPage */]),
            ],
        })
    ], CarSliderPageModule);
    return CarSliderPageModule;
}());

//# sourceMappingURL=car-slider.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map