webpackJsonp([13],{

/***/ 1008:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__header_one_header_one__ = __webpack_require__(1009);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_two_header_two__ = __webpack_require__(1010);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__recommend_destination_recommend_destination__ = __webpack_require__(1011);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__deals_deals__ = __webpack_require__(1012);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__travel_category_travel_category__ = __webpack_require__(1013);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__header_three_header_three__ = __webpack_require__(1014);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__profile_user_information_user_information__ = __webpack_require__(1015);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__profile_card_information_card_information__ = __webpack_require__(1016);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__profile_change_password_change_password__ = __webpack_require__(1017);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__header_one_header_one__["a" /* HeaderOneComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_two_header_two__["a" /* HeaderTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__recommend_destination_recommend_destination__["a" /* RecommendDestinationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__deals_deals__["a" /* DealsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__travel_category_travel_category__["a" /* TravelCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_three_header_three__["a" /* HeaderThreeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_user_information_user_information__["a" /* UserInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_card_information_card_information__["a" /* CardInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_change_password_change_password__["a" /* ChangePasswordComponent */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"]],
            exports: [__WEBPACK_IMPORTED_MODULE_2__header_one_header_one__["a" /* HeaderOneComponent */],
                __WEBPACK_IMPORTED_MODULE_3__header_two_header_two__["a" /* HeaderTwoComponent */],
                __WEBPACK_IMPORTED_MODULE_4__recommend_destination_recommend_destination__["a" /* RecommendDestinationComponent */],
                __WEBPACK_IMPORTED_MODULE_5__deals_deals__["a" /* DealsComponent */],
                __WEBPACK_IMPORTED_MODULE_6__travel_category_travel_category__["a" /* TravelCategoryComponent */],
                __WEBPACK_IMPORTED_MODULE_7__header_three_header_three__["a" /* HeaderThreeComponent */],
                __WEBPACK_IMPORTED_MODULE_8__profile_user_information_user_information__["a" /* UserInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_9__profile_card_information_card_information__["a" /* CardInformationComponent */],
                __WEBPACK_IMPORTED_MODULE_10__profile_change_password_change_password__["a" /* ChangePasswordComponent */]]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 1009:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderOneComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Header Toolbar Component
 * File path - '../../src/components/header-one/header-one'
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



var HeaderOneComponent = /** @class */ (function () {
    function HeaderOneComponent(navCtrl, viewCtrl, popoverCtrl) {
        this.navCtrl = navCtrl;
        this.viewCtrl = viewCtrl;
        this.popoverCtrl = popoverCtrl;
    }
    /**
     * Open Language Settings Page
     */
    HeaderOneComponent.prototype.goToLanguageSettingPage = function () {
        this.navCtrl.setRoot('LanguagePage');
    };
    /**
     * Open Notification Pop-over
     * @param myEvent
     */
    HeaderOneComponent.prototype.openNotification = function (myEvent) {
        var popover = this.popoverCtrl.create('NotificationPage');
        popover.present({
            ev: myEvent
        });
    };
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    HeaderOneComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], HeaderOneComponent.prototype, "title", void 0);
    HeaderOneComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-one',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-one\header-one.html"*/'<!-- Generated template for the HeaderOneComponent component -->\n\n<!--\n  - This component is for header toolber.\n  - that contains menu button, page title, notification and language change options \n-->\n<ion-navbar no-border>\n\n  <!-- Menu  -->\n  <button color="white" ion-button menuToggle>\n    <ion-icon name="menu" color="white"></ion-icon>\n  </button>\n\n  <!-- Page Title  -->\n  <ion-title color="white">{{title}}</ion-title>\n\n  <!-- Buttons  -->\n  <ion-buttons right>\n\n    <!-- Notification Button  -->\n    <button ion-button icon-only color="white" id="notification-button" (tap)="openNotification($event)">\n      <ion-icon name="notifications">\n        <ion-badge id="notifications-badge" color="danger">5</ion-badge>\n      </ion-icon>\n    </button>\n\n    <!-- Language Settings Option  -->\n    <button ion-button icon-only color="white" (tap)="goToLanguageSettingPage()">\n      <ion-icon name="md-options"></ion-icon>\n    </button>\n  </ion-buttons>\n</ion-navbar>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-one\header-one.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["PopoverController"]])
    ], HeaderOneComponent);
    return HeaderOneComponent;
}());

//# sourceMappingURL=header-one.js.map

/***/ }),

/***/ 1010:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderTwoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Header Toolbar Component
 * File path - '../../src/components/header-two/header-two'
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


var HeaderTwoComponent = /** @class */ (function () {
    function HeaderTwoComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    HeaderTwoComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], HeaderTwoComponent.prototype, "title", void 0);
    HeaderTwoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-two',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-two\header-two.html"*/'<!-- Generated template for the HeaderTwoComponent component -->\n<!-- This component is for header toolber that contains back button and page title  -->\n\n<!--\n  - This component is for header toolber.\n  - This header component toolbar `linear` background color.\n-->\n\n<ion-navbar no-border>\n\n  <!-- Back Button  -->\n  <ion-buttons start>\n    <button ion-button color="white" clear (tap)="dismiss()">\n      <ion-icon name="arrow-back" style="zoom:2.0;"></ion-icon>\n    </button>\n  </ion-buttons>\n\n  <!-- Page Title  -->\n  <ion-title>{{title}}</ion-title>\n\n</ion-navbar>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-two\header-two.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], HeaderTwoComponent);
    return HeaderTwoComponent;
}());

//# sourceMappingURL=header-two.js.map

/***/ }),

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecommendDestinationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_data_data__ = __webpack_require__(207);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RecommendDestinationComponent = /** @class */ (function () {
    function RecommendDestinationComponent(dataProvider) {
        this.dataProvider = dataProvider;
        // List of Recommend Destination
        this.recommendDestination = [];
    }
    /** Do any initialization */
    RecommendDestinationComponent.prototype.ngOnInit = function () {
        this.getRecommendDestination();
    };
    RecommendDestinationComponent.prototype.ngAfterViewInit = function () {
        this.slider.freeMode = true;
    };
    RecommendDestinationComponent.prototype.getRecommendDestination = function () {
        this.recommendDestination = this.dataProvider.getRecommendDestination();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], RecommendDestinationComponent.prototype, "slider", void 0);
    RecommendDestinationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'recommend-destination',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\recommend-destination\recommend-destination.html"*/'<!-- Recommend Destination Slider  -->\n<ion-slides padding-left padding-right #slider spaceBetween="10" slidesPerView="1.2" loop="true" effect="slide" autoplay="5000"\n  style="direction:ltr">\n  <ion-slide *ngFor="let slide of recommendDestination" [ngStyle]="{\'background\' : \'linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(\' + slide.image + \')\'}">\n    <div class="contents">\n      <h2>{{slide.country}}</h2>\n      <p>\n        <i class="fa fa-h-square" aria-hidden="true"></i> {{slide.totalHotels}} Hotels\n      </p>\n      <p>\n        Avarage Price: US\n        <ion-icon ios="logo-usd" md="logo-usd" color="danger"></ion-icon> {{slide.avgPrice}}\n      </p>\n    </div>\n  </ion-slide>\n</ion-slides>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\recommend-destination\recommend-destination.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_data_data__["a" /* DataProvider */]])
    ], RecommendDestinationComponent);
    return RecommendDestinationComponent;
}());

//# sourceMappingURL=recommend-destination.js.map

/***/ }),

/***/ 1012:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DealsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_data_data__ = __webpack_require__(207);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Deals Component
 * File path - '../../src/components/deals/deals'
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


var DealsComponent = /** @class */ (function () {
    function DealsComponent(dataProvider) {
        this.dataProvider = dataProvider;
        // List of Deals
        this.deals = [];
    }
    /** Do any initialization */
    DealsComponent.prototype.ngOnInit = function () {
        this.getDeals();
    };
    /**
     * Get Deals
     */
    DealsComponent.prototype.getDeals = function () {
        this.deals = this.dataProvider.getDeals();
    };
    DealsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'deals',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\deals\deals.html"*/'<!-- List of Deals  -->\n<div class="contents">\n  <ion-list no-lines *ngFor="let deal of deals">\n    <ion-item class="animated fadeInLeft">\n\n      <!-- Deal Image -->\n      <ion-thumbnail item-start>\n        <img [src]="deal.image">\n      </ion-thumbnail>\n\n      <!-- Details  -->\n      <div class="details">\n        <!-- Name of Deal -->\n        <h2 text-wrap>{{deal.name}} </h2>\n\n        <!-- Deal Details  -->\n        <p text-wrap>{{deal.details}}</p>\n\n        <!-- Price  -->\n        <span class="price">${{deal.price}}</span>\n\n      </div>\n    </ion-item>\n  </ion-list>\n</div>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\deals\deals.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_data_data__["a" /* DataProvider */]])
    ], DealsComponent);
    return DealsComponent;
}());

//# sourceMappingURL=deals.js.map

/***/ }),

/***/ 1013:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TravelCategoryComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TravelCategoryComponent = /** @class */ (function () {
    function TravelCategoryComponent(navCtrl) {
        this.navCtrl = navCtrl;
        this.categories = [
            { icon: 'fa fa-plane', name: 'FLIGHT', component: 'SearchFlightPage' },
            { icon: 'fa fa-bed', name: 'HOTELS', component: 'SearchHotelsPage' },
        ];
    }
    TravelCategoryComponent.prototype.goToCategoryPage = function (page) {
        this.navCtrl.setRoot(page.component);
    };
    TravelCategoryComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'travel-category',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\travel-category\travel-category.html"*/'<!-- Generated template for the TravelCategoryComponent component -->\n\n<!-- Travel Category List  -->\n<ion-grid>\n  <ion-row class="animated zoomIn" justify-content-center align-items-center>\n    <ion-col col-3 *ngFor="let category of categories" (tap)="goToCategoryPage(category)">\n      <!-- Category Icon  -->\n      <i class="{{category.icon}}" aria-hidden="true"></i>\n      <!-- Category Name  -->\n      <p>{{category.name}}</p>\n    </ion-col>\n  </ion-row>\n</ion-grid>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\travel-category\travel-category.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"]])
    ], TravelCategoryComponent);
    return TravelCategoryComponent;
}());

//# sourceMappingURL=travel-category.js.map

/***/ }),

/***/ 1014:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderThreeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderThreeComponent = /** @class */ (function () {
    function HeaderThreeComponent(viewCtrl) {
        this.viewCtrl = viewCtrl;
    }
    /**
     * Dismiss function
     * This function dismiss the popup modal
     */
    HeaderThreeComponent.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('title'),
        __metadata("design:type", String)
    ], HeaderThreeComponent.prototype, "title", void 0);
    HeaderThreeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'header-three',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-three\header-three.html"*/'<!-- Generated template for the HeaderThreeComponent component -->\n\n<!--\n  - This component is for header toolber.\n  - This header component header background color is `transparent`\n-->\n<ion-navbar no-border>\n  <!-- Back Button  -->\n  <ion-buttons start>\n    <button ion-button color="white" clear (tap)="dismiss()">\n      <ion-icon name="arrow-back" style="zoom:2.0;"></ion-icon>\n    </button>\n  </ion-buttons>\n\n  <!-- Page Title  -->\n  <ion-title>{{title}}</ion-title>\n</ion-navbar>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\header-three\header-three.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], HeaderThreeComponent);
    return HeaderThreeComponent;
}());

//# sourceMappingURL=header-three.js.map

/***/ }),

/***/ 1015:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserInformationComponent = /** @class */ (function () {
    function UserInformationComponent() {
    }
    UserInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-information',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\user-information\user-information.html"*/'<div class="container">\n  <form class="animated zoomIn contents">\n    <ion-list>\n\n      <!-- Full Name -->\n      <ion-item>\n        <ion-label stacked color="color2">Full Name</ion-label>\n        <ion-input type="text" placeholder="Full Name"></ion-input>\n      </ion-item>\n\n      <!-- Email Address -->\n      <ion-item>\n        <ion-label stacked color="color2">Email Address</ion-label>\n        <ion-input type="text" placeholder="Email Address"></ion-input>\n      </ion-item>\n\n      <!-- Phone Number -->\n      <ion-item>\n        <ion-label stacked color="color2">Phone Number</ion-label>\n        <ion-input type="text" placeholder="Phone Number"></ion-input>\n      </ion-item>\n\n      <!-- Address -->\n      <ion-item>\n        <ion-label stacked color="color2">Address</ion-label>\n        <ion-input type="text" placeholder="Address"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-row justify-content-center align-items-center>\n      <button ion-button block type="button" color="color2">\n          Update Profile\n      </button>\n    </ion-row>\n\n  </form>\n</div>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\user-information\user-information.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], UserInformationComponent);
    return UserInformationComponent;
}());

//# sourceMappingURL=user-information.js.map

/***/ }),

/***/ 1016:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardInformationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CardInformationComponent = /** @class */ (function () {
    function CardInformationComponent() {
    }
    CardInformationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'card-information',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\card-information\card-information.html"*/'<div class="container">\n  <form class="animated zoomIn contents">\n    <ion-list>\n\n      <!-- Cardholder Name -->\n      <ion-item>\n        <ion-label stacked color="color2">Cardholder Name</ion-label>\n        <ion-input type="text" placeholder="Cardholder Name"></ion-input>\n      </ion-item>\n\n      <!-- Card Number -->\n      <ion-item>\n        <ion-label stacked color="color2">Card Number</ion-label>\n        <ion-input type="text" placeholder="Card Number"></ion-input>\n      </ion-item>\n\n      <!-- Expire Date -->\n      <ion-item>\n        <ion-label stacked color="color2">Expire Date</ion-label>\n        <ion-input type="text" placeholder="Expire Date"></ion-input>\n      </ion-item>\n\n      <!-- CVC -->\n      <ion-item>\n        <ion-label stacked color="color2">CVC</ion-label>\n        <ion-input type="text" placeholder="CVC"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-row justify-content-center align-items-center>\n      <button ion-button block type="button" color="color2">\n          Update Card Info\n      </button>\n    </ion-row>\n  </form>\n</div>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\card-information\card-information.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], CardInformationComponent);
    return CardInformationComponent;
}());

//# sourceMappingURL=card-information.js.map

/***/ }),

/***/ 1017:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangePasswordComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ChangePasswordComponent = /** @class */ (function () {
    function ChangePasswordComponent() {
    }
    ChangePasswordComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'change-password',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\change-password\change-password.html"*/'<div class="container">\n  <form class="animated zoomIn contents">\n    <ion-list>\n\n      <!-- Current Password -->\n      <ion-item>\n        <ion-label stacked color="color2">Current Password</ion-label>\n        <ion-input type="password" placeholder="Current Password"></ion-input>\n      </ion-item>\n\n      <!-- New Password -->\n      <ion-item>\n        <ion-label stacked color="color2">New Password</ion-label>\n        <ion-input type="text" placeholder="New Password"></ion-input>\n      </ion-item>\n\n      <!-- Confirm Password -->\n      <ion-item>\n        <ion-label stacked color="color2">Confirm Password</ion-label>\n        <ion-input type="text" placeholder="Confirm Password"></ion-input>\n      </ion-item>\n    </ion-list>\n\n    <ion-row justify-content-center align-items-center>\n      <button ion-button block type="button" color="color2">\n          Update Password\n      </button>\n    </ion-row>\n  </form>\n</div>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\components\profile\change-password\change-password.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ChangePasswordComponent);
    return ChangePasswordComponent;
}());

//# sourceMappingURL=change-password.js.map

/***/ }),

/***/ 1048:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderHotelPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Order Page of Hotel Component
 * File path - '../../../src/pages/hotel/order-hotel/order-hotel'
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


var OrderHotelPage = /** @class */ (function () {
    function OrderHotelPage(navCtrl, navParams, modalCtrl, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.modalCtrl = modalCtrl;
        this.viewCtrl = viewCtrl;
        this.hotelDetails = this.navParams.get('hotelDetails');
    }
    // Open Hotel Location Map Page
    OrderHotelPage.prototype.openLocationMap = function () {
        this.modalCtrl.create('LocationMapPage', { address: this.hotelDetails.name }).present();
    };
    // Open CHeckout Page
    OrderHotelPage.prototype.goToCheckoutPage = function () {
        this.navCtrl.setRoot('CheckoutPage');
    };
    OrderHotelPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-order-hotel',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\hotel\order-hotel\order-hotel.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Order Page  -->\n\n<!-- Header  -->\n<ion-header no-border>\n  <header-two title="Order"></header-two>\n</ion-header>\n\n<!-- Content  -->\n<ion-content>\n\n  <!--  Order Summery  -->\n\n  <!-- Hotel Main Feature Image  -->\n  <div class="header-card">\n    <ion-card no-padding no-margin>\n      <img src="{{hotelDetails.image[1]}}" />\n    </ion-card>\n  </div>\n\n  <!-- Fab Button of Hotel Location Map Page  -->\n  <ion-fab top right edge>\n    <button ion-fab color="danger" (tap)="openLocationMap()"><ion-icon name="ios-pin-outline"></ion-icon></button>\n  </ion-fab>\n\n  <!-- Hotel Details  -->\n  <div class="details-card">\n    <ion-card>\n\n      <!-- Name of Hotel  -->\n      <ion-card-header text-wrap color="color2">\n        <h1> {{hotelDetails.name}}</h1>\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <!-- Total Reviews  -->\n        <p class="review">{{hotelDetails.totalReviews}} Reviews | {{hotelDetails.type}} hotel</p>\n\n        <!-- Hotel Address  -->\n        <p padding-bottom>\n          <ion-icon name="ios-pin" item-start color="color2"></ion-icon> {{hotelDetails.address}}\n        </p>\n\n        <!--Check in-out Dates  -->\n        <ion-row padding-top class="dates">\n\n          <!-- Check-in Date  -->\n          <ion-col col-6 text-center class="col1">\n            <p class="title">Check In</p>\n            <p class="date">26-12-2018</p>\n          </ion-col>\n\n          <!-- Check-in Date  -->\n          <ion-col col-6 text-center>\n            <p class="title">Check Out</p>\n            <p class="date">26-12-2018</p>\n          </ion-col>\n\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n\n\n    <!-- Passengers Overview -->\n    <ion-card>\n      <ion-card-header text-center>\n        Passengers\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row class="animated zoomIn" justify-content-center align-items-center>\n          <ion-col col-3 text-center>\n            <p>2 Rooms</p>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <p>2 Adults</p>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <p>1 Child</p>\n          </ion-col>\n          <ion-col col-3 text-center>\n            <p>1 Infants</p>\n          </ion-col>\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n  </div>\n</ion-content>\n\n<!-- Footer  -->\n<ion-footer>\n  <ion-row justify-content-right align-items-right>\n    <ion-col col-8 text-left>\n      <p class="price">Total Price: USD440</p>\n    </ion-col>\n    <ion-col col-4>\n      <button ion-button large full no-margin class="custom-btn" (tap)="goToCheckoutPage()">Checkout</button>\n    </ion-col>\n  </ion-row>\n</ion-footer>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\hotel\order-hotel\order-hotel.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], OrderHotelPage);
    return OrderHotelPage;
}());

//# sourceMappingURL=order-hotel.js.map

/***/ }),

/***/ 999:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderHotelPageModule", function() { return OrderHotelPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_hotel__ = __webpack_require__(1048);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(1008);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var OrderHotelPageModule = /** @class */ (function () {
    function OrderHotelPageModule() {
    }
    OrderHotelPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__order_hotel__["a" /* OrderHotelPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__order_hotel__["a" /* OrderHotelPage */]),
            ],
        })
    ], OrderHotelPageModule);
    return OrderHotelPageModule;
}());

//# sourceMappingURL=order-hotel.module.js.map

/***/ })

});
//# sourceMappingURL=13.js.map