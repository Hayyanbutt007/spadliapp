webpackJsonp([36],{

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(208);
/**
* @author    ThemesBuckets <themebucketbd@gmail.com>
* @copyright Copyright (c) 2018
* @license   Fulcrumy
*
* This File Represent List of Cars Component
* File path - '../../src/pages/car/car-tabs/car-list/car-list'
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



var CarListPage = /** @class */ (function () {
    function CarListPage(navCtrl, navParams, modalCtrl, dataProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.dataProvider = dataProvider;
        // Array list of Cars
        this.cars = [];
        this.getCarList();
    }
    /**
     * -----------------------------------------------------------
     * Get List of Cars
     * -----------------------------------------------------------
     * From Data Provider Service Call `getCarList` method that Give You List of Car
     *
     * You get `DataProvider` Service at - 'src/providers/data/data';
     */
    CarListPage.prototype.getCarList = function () {
        this.cars = this.dataProvider.getCarList();
    };
    /**
     * Open Car Details Page
     */
    CarListPage.prototype.viewDetails = function (carDetails) {
        this.modalCtrl.create('CarDetailsPage', { carDetails: carDetails }).present();
    };
    CarListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-car-list',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\car\car-tabs\car-list\car-list.html"*/'<!-- List of Cars  -->\n<ion-content padding>\n  <div *ngIf="cars.length > 0">\n    <ion-list no-lines no-margin *ngFor="let car of cars" (tap)="viewDetails(car)">\n      <ion-item class="animated fadeInLeft">\n\n        <!-- Car Image  -->\n        <ion-thumbnail item-start>\n          <img [src]="car.image" imageViewer>\n        </ion-thumbnail>\n\n        <!-- Car Name  -->\n        <p text-wrap class="name">{{car.name }}</p>\n\n        <!-- Car Type  -->\n        <p>\n          <ion-badge color="color2">{{car.carType}}</ion-badge>\n        </p>\n\n        <!-- Select Option Button  -->\n        <button ion-button clear item-end color="color1">Select</button>\n      </ion-item>\n    </ion-list>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\car\car-tabs\car-list\car-list.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], CarListPage);
    return CarListPage;
}());

//# sourceMappingURL=car-list.js.map

/***/ }),

/***/ 982:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarListPageModule", function() { return CarListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__car_list__ = __webpack_require__(1032);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__ = __webpack_require__(557);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var CarListPageModule = /** @class */ (function () {
    function CarListPageModule() {
    }
    CarListPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__car_list__["a" /* CarListPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__car_list__["a" /* CarListPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic_img_viewer__["a" /* IonicImageViewerModule */]
            ],
        })
    ], CarListPageModule);
    return CarListPageModule;
}());

//# sourceMappingURL=car-list.module.js.map

/***/ })

});
//# sourceMappingURL=36.js.map