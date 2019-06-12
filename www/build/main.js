webpackJsonp([40],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(363);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(111);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var AuthService = /** @class */ (function () {
    function AuthService(events, afAuth, app, storage) {
        var _this = this;
        this.events = events;
        this.afAuth = afAuth;
        this.app = app;
        this.storage = storage;
        this.objLoggedUser = {
            name: "name",
            email: "test",
            photo: "assets/imgs/avatar.png"
        };
        afAuth.authState.subscribe(function (user) {
            _this.user = user;
        });
    }
    AuthService.prototype.signInWithEmail = function (credentials) {
        console.log('Sign in with email');
        return this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password);
    };
    AuthService.prototype.signUp = function (credentials) {
        return this.afAuth.auth.createUserWithEmailAndPassword(credentials.email, credentials.password);
    };
    Object.defineProperty(AuthService.prototype, "authenticated", {
        get: function () {
            return this.user !== null;
        },
        enumerable: true,
        configurable: true
    });
    AuthService.prototype.getEmail = function () {
        return this.user && this.user.email;
    };
    AuthService.prototype.signOut = function () {
        return this.afAuth.auth.signOut();
    };
    AuthService.prototype.signInWithGoogle = function () {
        console.log('Sign in with google');
        return this.oauthSignIn(new __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"].GoogleAuthProvider());
    };
    AuthService.prototype.oauthSignIn = function (provider) {
        var _this = this;
        if (!window.cordova) {
            return this.afAuth.auth.signInWithPopup(provider).then(function (result) {
                var nav = _this.app.getActiveNav();
                _this.objLoggedUser.email = result.user.email;
                _this.objLoggedUser.name = result.user.displayName;
                _this.objLoggedUser.photo = result.user.photoURL;
                _this.storage.set('login', _this.objLoggedUser);
                nav.setRoot('HomePage');
                _this.events.publish('user:login', _this.objLoggedUser, Date.now());
            }).catch(function (error) {
                // Handle Errors here.
                alert(error.message);
            });
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    var nav = _this.app.getActiveNav();
                    _this.objLoggedUser.email = result.user.email;
                    _this.objLoggedUser.name = result.user.displayName;
                    _this.objLoggedUser.photo = result.user.photoURL;
                    _this.storage.set('login', _this.objLoggedUser);
                    nav.setRoot('HomePage');
                    _this.events.publish('user:login', _this.objLoggedUser, Date.now());
                }).catch(function (error) {
                    // Handle Errors here.
                    alert(error.message);
                });
            });
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Events"], __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["AngularFireAuth"], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"], __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.services.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This file represents a provider of Data.
 * File path - '../../../src/providers/data/data'
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


var DataProvider = /** @class */ (function () {
    function DataProvider(http) {
        this.http = http;
    }
    /**
     * ----------------------------------------------------
     * Side Menu Data
     * ----------------------------------------------------
     */
    DataProvider.prototype.getSideMenus = function () {
        return [
            {
                title: 'Home', icon: 'home', component: 'HomePage'
            },
            {
                title: 'Search', icon: 'search',
                subPages: [{
                        title: 'Flight',
                        icon: 'fa fa-fighter-jet',
                        component: 'SearchFlightPage',
                    }, {
                        title: 'Hotels',
                        icon: 'fa fa-bed',
                        component: 'SearchHotelsPage',
                    },
                ]
            },
            { title: 'Deals', icon: 'md-megaphone', component: 'DealsPage' },
            { title: 'Your Profile', icon: 'md-person', component: 'ProfilePage' },
            { title: 'About Us', icon: 'bookmark', component: 'AboutUsPage' },
            { title: 'Contact Us', icon: 'call', component: 'ContactUsPage' },
            { title: 'Language', icon: 'ios-switch', component: 'LanguagePage' },
            { title: 'Settings', icon: 'ios-settings', component: 'SettingsPage' }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Flights
     * ----------------------------------------------------
     */
    DataProvider.prototype.getFlightList = function () {
        return [
            {
                airlinesName: 'Turkish Airlines',
                departureTime: '6:15 am',
                returnTime: '7:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '23h 10m',
                price: '1472'
            },
            {
                airlinesName: 'Qatar Airways',
                departureTime: '3:00 am',
                returnTime: '3:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '22h 35m',
                price: '1511'
            },
            {
                airlinesName: 'Turkish Airlines',
                departureTime: '6:15 am',
                returnTime: '7:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '23h 10m',
                price: '1472'
            },
            {
                airlinesName: 'Qatar Airways',
                departureTime: '3:00 am',
                returnTime: '3:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '22h 35m',
                price: '1511'
            },
            {
                airlinesName: 'Turkish Airlines',
                departureTime: '6:15 am',
                returnTime: '7:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '23h 10m',
                price: '1472'
            },
            {
                airlinesName: 'Qatar Airways',
                departureTime: '3:00 am',
                returnTime: '3:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '22h 35m',
                price: '1511'
            },
            {
                airlinesName: 'Turkish Airlines',
                departureTime: '6:15 am',
                returnTime: '7:25 pm',
                date: new Date(),
                from: 'DAC',
                to: 'IAD',
                totalHour: '23h 10m',
                price: '1472'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Hotels
     * ----------------------------------------------------
     */
    DataProvider.prototype.getHotels = function () {
        return [
            {
                name: 'Four Seasons Hotel Toronto',
                image: [
                    'assets/imgs/background/img6.jpeg',
                    'assets/imgs/background/img8.jpeg',
                    'assets/imgs/background/img9.jpeg'
                ],
                star: 4.7,
                totalReviews: 1080,
                type: '5-star',
                address: 'Four Seasons Hotel Toronto',
                website: 'fourseasons.com',
                phone: '+1 416-964-0411',
                price: '1200',
                overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
                details: "<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>\n        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,\n        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>\n        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus \n        a fitness centre, event space and a 24-hour business centre.</p>",
                amenities: [
                    {
                        icon: 'fa fa-car',
                        name: 'Free parking'
                    },
                    {
                        icon: 'fa fa-coffee',
                        name: 'Free breakfast'
                    }, {
                        icon: 'fa fa-snowflake-o',
                        name: 'Air-conditioned'
                    },
                    {
                        icon: 'fa fa-plug',
                        name: 'Laundry service'
                    },
                    {
                        icon: 'fa fa-building',
                        name: 'Business center'
                    },
                    {
                        icon: 'fa fa-window-restore',
                        name: 'Room service'
                    },
                    {
                        icon: 'fa fa-child',
                        name: 'Kid-friendly'
                    }
                ]
            },
            {
                name: 'The Magnolia Hotel & Spa',
                image: [
                    'assets/imgs/background/img8.jpeg',
                    'assets/imgs/background/img6.jpeg',
                    'assets/imgs/background/img9.jpeg'
                ],
                star: 4.7,
                totalReviews: 1080,
                type: '5-star',
                address: '623 Courtney Street, Victoria, BC V8W 1B8, Canada',
                website: 'magnoliahotel.com',
                phone: '+1 250-381-0999',
                price: '900',
                overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
                details: "<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>\n        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,\n        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>\n        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus \n        a fitness centre, event space and a 24-hour business centre.</p>",
                amenities: [
                    {
                        icon: 'fa fa-car',
                        name: 'Free parking'
                    },
                    {
                        icon: 'fa fa-coffee',
                        name: 'Free breakfast'
                    }, {
                        icon: 'fa fa-snowflake-o',
                        name: 'Air-conditioned'
                    },
                    {
                        icon: 'fa fa-plug',
                        name: 'Laundry service'
                    },
                    {
                        icon: 'fa fa-building',
                        name: 'Business center'
                    },
                    {
                        icon: 'fa fa-window-restore',
                        name: 'Room service'
                    },
                    {
                        icon: 'fa fa-child',
                        name: 'Kid-friendly'
                    }
                ]
            },
            {
                name: 'Marriott on the Falls',
                image: [
                    'assets/imgs/background/img9.jpeg',
                    'assets/imgs/background/img6.jpeg',
                    'assets/imgs/background/img8.jpeg'
                ],
                star: 4.7,
                totalReviews: 1080,
                type: '5-star',
                address: '6755 Fallsview Blvd, Niagara Falls, ON L2G 3W7, Canada',
                website: 'marriottonthefalls.com',
                phone: '+1 416-964-0411',
                price: '1200',
                overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
                details: "<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>\n        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,\n        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>\n        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus \n        a fitness centre, event space and a 24-hour business centre.</p>",
                amenities: [
                    {
                        icon: 'fa fa-car',
                        name: 'Free parking'
                    },
                    {
                        icon: 'fa fa-coffee',
                        name: 'Free breakfast'
                    }, {
                        icon: 'fa fa-snowflake-o',
                        name: 'Air-conditioned'
                    },
                    {
                        icon: 'fa fa-plug',
                        name: 'Laundry service'
                    },
                    {
                        icon: 'fa fa-building',
                        name: 'Business center'
                    },
                    {
                        icon: 'fa fa-window-restore',
                        name: 'Room service'
                    },
                    {
                        icon: 'fa fa-child',
                        name: 'Kid-friendly'
                    }
                ]
            },
            {
                name: 'Best Western Oasis Inn',
                image: [
                    'assets/imgs/background/img6.jpeg',
                    'assets/imgs/background/img8.jpeg',
                    'assets/imgs/background/img9.jpeg'
                ],
                star: 4.7,
                totalReviews: 1080,
                type: '5-star',
                address: '303 S 2nd St, Canadian, TX 79014, USA',
                website: 'bestwestern.com',
                phone: '+1 416-964-0411',
                price: '1200',
                overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
                details: "<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>\n        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,\n        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>\n        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus \n        a fitness centre, event space and a 24-hour business centre.</p>",
                amenities: [
                    {
                        icon: 'fa fa-car',
                        name: 'Free parking'
                    },
                    {
                        icon: 'fa fa-coffee',
                        name: 'Free breakfast'
                    }, {
                        icon: 'fa fa-snowflake-o',
                        name: 'Air-conditioned'
                    },
                    {
                        icon: 'fa fa-plug',
                        name: 'Laundry service'
                    },
                    {
                        icon: 'fa fa-building',
                        name: 'Business center'
                    },
                    {
                        icon: 'fa fa-window-restore',
                        name: 'Room service'
                    },
                    {
                        icon: 'fa fa-child',
                        name: 'Kid-friendly'
                    }
                ]
            },
            {
                name: 'Pan Pacific Hotel Vancouver',
                image: [
                    'assets/imgs/background/img8.jpeg',
                    'assets/imgs/background/img6.jpeg',
                    'assets/imgs/background/img9.jpeg'
                ],
                star: 4.7,
                totalReviews: 1080,
                type: '5-star',
                address: '300 - 999 Canada Place, Vancouver, BC V6C 3B5, Canada',
                website: 'bestwestern.com',
                phone: '+1 416-964-0411',
                price: '1200',
                overview: 'Upscale rooms, some with harbour views, plus a day spa & Mediterranean dining.',
                details: "<p>In the fashionable Yorkville shopping and restaurant quarter, this high-rise, luxe property is a 9-minute walk from Royal Ontario Museum.</p>\n        <p>The sophisticated rooms feature neutral tones and floor-to-ceiling windows, plus free Wi-Fi and flat-screen TVs. Tea and coffeemaking facilities,\n        24-hour room service, minibars and iPod docks are also provided. Suites add pull-out sofas and separate living/dining areas; some have kitchens.</p>\n        <p>The hotel has a chic restaurant, plus a vibrant cocktail bar with a terrace. There's also a luxe spa with an indoor pool and a whirlpool tub, plus \n        a fitness centre, event space and a 24-hour business centre.</p>",
                amenities: [
                    {
                        icon: 'fa fa-car',
                        name: 'Free parking'
                    },
                    {
                        icon: 'fa fa-coffee',
                        name: 'Free breakfast'
                    }, {
                        icon: 'fa fa-snowflake-o',
                        name: 'Air-conditioned'
                    },
                    {
                        icon: 'fa fa-plug',
                        name: 'Laundry service'
                    },
                    {
                        icon: 'fa fa-building',
                        name: 'Business center'
                    },
                    {
                        icon: 'fa fa-window-restore',
                        name: 'Room service'
                    },
                    {
                        icon: 'fa fa-child',
                        name: 'Kid-friendly'
                    }
                ]
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Cars
     * ----------------------------------------------------
     */
    DataProvider.prototype.getCarList = function () {
        return [
            {
                name: 'Audi A4',
                image: 'assets/imgs/cars/car1.png',
                price: '400',
                carType: 'Economy',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Peugeot',
                image: 'assets/imgs/cars/car2.png',
                price: '391.94',
                carType: 'Compact',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'BMW E89',
                image: 'assets/imgs/cars/car3.png',
                price: '391.94',
                carType: 'Mid-size',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'BMW M5',
                image: 'assets/imgs/cars/car4.png',
                price: '450.94',
                carType: 'Compact',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Yellow Ferrari',
                image: 'assets/imgs/cars/car2.png',
                price: '300.94',
                carType: 'Economy',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Hyundai Accent',
                image: 'assets/imgs/cars/car3.png',
                price: '250',
                carType: 'Compact',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Audi A4',
                image: 'assets/imgs/cars/car1.png',
                price: '400.20',
                carType: 'Mid-size',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'BMW M5',
                image: 'assets/imgs/cars/car4.png',
                price: '100.30',
                carType: 'Compact',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Audi A4',
                image: 'assets/imgs/cars/car1.png',
                price: '200.94',
                carType: 'Economy',
                seats: 4,
                doorCount: 4,
                driverAge: 25,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            },
            {
                name: 'Yellow Ferrari',
                image: 'assets/imgs/cars/car2.png',
                price: '391.94',
                carType: 'Compact',
                seats: 5,
                doorCount: 4,
                driverAge: 26,
                transmission: 'Automatic',
                isAirConditioned: 'Yes',
                isUnlimitedMileage: 'Yes'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Bus
     * ----------------------------------------------------
     */
    DataProvider.prototype.getBusList = function () {
        return [
            {
                name: 'Articulated Bus',
                type: 'Single deck',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Atlantean',
                type: 'Double deck',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Axcess-Ultralow',
                type: 'Executive',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Centroliner',
                type: 'Single deck',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Century',
                type: 'Executive',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'CityPacer',
                type: 'Single deck',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Articulated Bus',
                type: 'Double deck',
                price: '400',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Trains
     * ----------------------------------------------------
     */
    DataProvider.prototype.getTrainList = function () {
        return [
            {
                name: 'Ciremal',
                type: 'Executive(A)',
                price: '90',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Harina',
                type: 'Economy(c)',
                price: '100.10',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Connecting Trains',
                type: 'Executive(A)',
                price: '80.30',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Ciremal',
                type: 'Economy(c)',
                price: '100',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Harina',
                type: 'Economy(c)',
                price: '70.90',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            },
            {
                name: 'Ciremal',
                type: 'Economy(c)',
                price: '90.45',
                startTime: '7:00 am',
                stopTime: '3:30 pm',
                totalHour: '8h 30m',
                from: 'Canada',
                to: 'Germany'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Cruise
     * ----------------------------------------------------
     */
    DataProvider.prototype.getCruiseList = function () {
        return [
            {
                boatName: 'Celebrity Silhouette ',
                subname: '13 Night Trade Winds Transatlantic',
                startDate: 'Sun Apr 15',
                stopDate: 'Sat Apr 28',
                duration: '13 nights',
                image: 'assets/imgs/cruise/cruise1.jpeg',
                title: 'Itinerary',
                destination: 'Fort Lauderdale - Florida',
                price: '1123'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                image: 'assets/imgs/cruise/cruise2.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '774'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '5 nights',
                image: 'assets/imgs/cruise/cruise3.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '900'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '10 nights',
                image: 'assets/imgs/cruise/cruise4.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '600'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '12 nights',
                image: 'assets/imgs/cruise/cruise1.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '876'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '21 nights',
                image: 'assets/imgs/cruise/cruise2.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '1123'
            },
            {
                boatName: 'Celebrity Silhouette ',
                subname: '7 Night Eastern Caribbean',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                image: 'assets/imgs/cruise/cruise3.jpeg',
                title: 'Itinerary',
                destination: 'Ft. Lauderdale',
                price: '888'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Activities
     * ----------------------------------------------------
     */
    DataProvider.prototype.getActivities = function () {
        return [
            {
                name: 'Georgia Aquarium Admission',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity1.jpeg'
            },
            {
                name: 'Zoo Atlanta Admission',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity2.jpeg'
            },
            {
                name: 'Urban Adventure Quest- Atlanta',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity3.jpeg'
            },
            {
                name: 'Millennium Gate Museum',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity4.jpeg'
            },
            {
                name: 'Georgia Aquarium Admission',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity5.jpeg'
            },
            {
                name: 'Zoo Atlanta Admission',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity2.jpeg'
            },
            {
                name: 'Georgia Aquarium Admission',
                from: 'Atlanta',
                startDate: 'Sun Apr 8',
                stopDate: 'Sat Apr 15',
                duration: '7 nights',
                price: '1500',
                image: 'assets/imgs/activities/activity1.jpeg'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Deals
     * ----------------------------------------------------
     */
    DataProvider.prototype.getDeals = function () {
        return [
            {
                name: 'Japan: 9-Day Trip',
                details: 'Visit Japan with sightseeing',
                price: '1200',
                image: 'assets/imgs/background/img5.jpeg',
                page: 'DealsJapanPage'
            },
            {
                name: 'Iceland: 5-Day Trip',
                details: 'Visit Iceland, sightseeing tours',
                price: '1000',
                image: 'assets/imgs/background/img6.jpeg'
            },
            {
                name: 'Australia: 15-Day Trip',
                details: 'Visit Australia, Queenstown',
                price: '900',
                image: 'assets/imgs/background/img7.jpeg'
            },
            {
                name: 'Japan: 6-Day Trip',
                details: 'Visit Japan, Queenstown',
                price: '900',
                image: 'assets/imgs/background/img8.jpeg'
            }
        ];
    };
    /**
     * ----------------------------------------------------
     * Get List of Recommend Destination
     * ----------------------------------------------------
     */
    DataProvider.prototype.getRecommendDestination = function () {
        return [
            {
                country: 'Washington',
                image: 'assets/imgs/background/img8.jpeg',
                totalHotels: 890,
                avgPrice: 200
            },
            {
                country: 'Bangkok',
                image: 'assets/imgs/background/img7.jpeg',
                totalHotels: 900,
                avgPrice: 110
            },
            {
                country: 'Singapore',
                image: 'assets/imgs/background/img5.jpeg',
                totalHotels: 690,
                avgPrice: 80
            },
            {
                country: 'Kathmandu',
                image: 'assets/imgs/background/img9.jpeg',
                totalHotels: 767,
                avgPrice: 130
            }
        ];
    };
    DataProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], DataProvider);
    return DataProvider;
}());

//# sourceMappingURL=data.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_services__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(111);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * This File Represent Sign In Component
 * File path - '../../../src/pages/authentication/sign-in/sign-in'
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



//import { FormBuilder, Validators } from '@angular/forms';



var SignInPage = /** @class */ (function () {
    function SignInPage(navCtrl, navParams, formBuilder, auth, menuCtrl, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.auth = auth;
        this.menuCtrl = menuCtrl;
        this.storage = storage;
        this.events = events;
        // Email Validation Regex Patter
        this.emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
        this.menuCtrl.enable(false); // Disable SideMenu     
    }
    /** Do any initialization */
    SignInPage.prototype.ngOnInit = function () {
        this.formValidation();
    };
    /***
     * --------------------------------------------------------------
     * Form Validation
     * --------------------------------------------------------------
     * @method    formValidation    This function build a Login form with validation
     *
     */
    SignInPage.prototype.formValidation = function () {
        this.signInForm = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].pattern(this.emailPattern), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])],
            password: ['', __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].compose([__WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].minLength(6), __WEBPACK_IMPORTED_MODULE_1__angular_forms__["Validators"].required])]
        });
    };
    /**
     * --------------------------------------------------------------
     * Login Action
     * --------------------------------------------------------------
     * @method doLogin    Login action just redirect to your home page.
     *
     * ** You can call any backend API into this function. **
     */
    SignInPage.prototype.doLogin = function () {
        var _this = this;
        var data = this.signInForm.value;
        if (!data.email) {
            return;
        }
        var credentials = {
            email: data.email,
            password: data.password
        };
        this.auth.signInWithEmail(credentials)
            .then(function () { return _this.navCtrl.setRoot('HomePage'); }, function (error) { return _this.signInError = error.message; });
        //this.navCtrl.setRoot('HomePage');
    };
    SignInPage.prototype.doLogingoogle = function () {
        this.auth.signInWithGoogle();
    };
    /**
     * -------------------------------------------------------------
     * Go to Forget Password Page
     * -------------------------------------------------------------
     */
    SignInPage.prototype.goToForgetPasswordPage = function () {
        this.navCtrl.setRoot('ForgetPasswordPage');
    };
    /**
     * -------------------------------------------------------------
     * Go to Sign Up Page
     * -------------------------------------------------------------
     */
    SignInPage.prototype.goToSignUpPage = function () {
        this.navCtrl.setRoot('SignUpPage');
    };
    SignInPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\authentication\sign-in\sign-in.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n\n<!-- Login Page -->\n\n<ion-content>\n  <div class="container">\n\n    <!-- Title of Page  -->\n    <div class="top-content" text-center>\n      <div class="animated fadeInDown title">SIGN IN</div>\n    </div>\n\n    <!-- Sign In Form  -->\n    <div class="form-content">\n\n      <form class="animated slideInUp" (ngSubmit)="signInForm" [formGroup]="signInForm">\n        <ion-list>\n\n          <!-- Email Address -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-mail" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="email" placeholder="Your Email Address" name="email" formControlName="email" [(ngModel)]="signInForm.email"\n              [class.invalid]="!signInForm.controls.email.valid && signInForm.controls.email.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Email Validation Message  -->\n          <div class="error-message" *ngIf="!signInForm.controls.email.valid  && signInForm.controls.email.dirty">\n            <p>Please enter a valid email address.</p>\n          </div>\n\n          <!-- Password -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-eye" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="password" placeholder="Your Password" name="password" formControlName="password" [(ngModel)]="signInForm.password"\n              [class.invalid]="!signInForm.controls.password.valid && signInForm.controls.password.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Password Validation Message  -->\n          <div class="error-message" *ngIf="!signInForm.controls.password.valid  && signInForm.controls.password.dirty">\n            <p>Please enter a valid password.</p>\n          </div>\n\n          <!-- Forget Password Button  -->\n          <ion-item no-lines text-right>\n            <button ion-button clear color="color3" (tap)="goToForgetPasswordPage()">Forget Password?</button>\n          </ion-item>\n        </ion-list>\n\n        <!-- Sign In Button  -->\n        <button ion-button round block type="button" class="custom-btn" (tap)="doLogin()" (click)="doLogin()">\n            Sign In\n        </button>\n\n        <!-- Sign Up Button  -->\n        <ion-row justify-content-center align-items-center>\n          <button ion-button clear type="button" color="color3" (tap)="goToSignUpPage()" (click)="goToSignUpPage()">\n              Dont have an account? Sign Up\n          </button>\n        </ion-row>\n\n        <p text-center>Or Sign In Using</p>\n\n        <!-- Social Buttons  -->\n        <ion-row justify-content-center align-items-center>\n          <!-- Facebook  -->\n          <button ion-fab mini class="facebook">\n            <span class="fa fa-facebook " aria-hidden="true"></span>\n          </button>\n          <!-- Google  -->\n          <button ion-fab mini class="google" (tap)="doLogingoogle()">\n            <span class="fa fa-google " aria-hidden="true"></span>\n          </button>\n          <!-- Twitter  -->\n        \n        </ion-row>\n        {{signInError}}\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\pages\authentication\sign-in\sign-in.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["FormBuilder"],
            __WEBPACK_IMPORTED_MODULE_3__services_auth_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"]])
    ], SignInPage);
    return SignInPage;
}());

//# sourceMappingURL=sign-in.js.map

/***/ }),

/***/ 221:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 221;

/***/ }),

/***/ 264:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		970,
		31
	],
	"../pages/activities/activities-details/activities-details.module": [
		971,
		30
	],
	"../pages/activities/activities-list/activities-list.module": [
		972,
		29
	],
	"../pages/activities/search-activities/search-activities.module": [
		975,
		6
	],
	"../pages/authentication/forget-password/forget-password.module": [
		973,
		38
	],
	"../pages/authentication/sign-in/sign-in.module": [
		974,
		39
	],
	"../pages/authentication/sign-up/sign-up.module": [
		976,
		37
	],
	"../pages/bus/bus-details/bus-details.module": [
		978,
		28
	],
	"../pages/bus/bus-list/bus-list.module": [
		977,
		27
	],
	"../pages/bus/search-bus/search-bus.module": [
		979,
		5
	],
	"../pages/car/car-details/car-details.module": [
		980,
		26
	],
	"../pages/car/car-tabs/car-list/car-list.module": [
		982,
		36
	],
	"../pages/car/car-tabs/car-slider/car-slider.module": [
		983,
		35
	],
	"../pages/car/car-tabs/car-tabs.module": [
		981,
		25
	],
	"../pages/car/search-car/search-car.module": [
		984,
		4
	],
	"../pages/checkout/checkout.module": [
		987,
		24
	],
	"../pages/congratulation/congratulation.module": [
		986,
		34
	],
	"../pages/contact-us/contact-us.module": [
		988,
		23
	],
	"../pages/cruise/cruise-details/cruise-details.module": [
		985,
		22
	],
	"../pages/cruise/cruise-list/cruise-list.module": [
		989,
		21
	],
	"../pages/cruise/search-cruise/search-cruise.module": [
		990,
		3
	],
	"../pages/deals-japan/deals-japan.module": [
		991,
		20
	],
	"../pages/deals/deals.module": [
		992,
		19
	],
	"../pages/flight/flight-details/flight-details.module": [
		993,
		18
	],
	"../pages/flight/flight-list/flight-list.module": [
		994,
		17
	],
	"../pages/flight/search-flight/search-flight.module": [
		996,
		2
	],
	"../pages/home/home.module": [
		995,
		16
	],
	"../pages/hotel/hotel-details/hotel-details.module": [
		997,
		15
	],
	"../pages/hotel/hotel-list/hotel-list.module": [
		998,
		14
	],
	"../pages/hotel/order-hotel/order-hotel.module": [
		999,
		13
	],
	"../pages/hotel/search-hotels/search-hotels.module": [
		1000,
		1
	],
	"../pages/landing/landing.module": [
		1001,
		33
	],
	"../pages/language/language.module": [
		1002,
		12
	],
	"../pages/location-map/location-map.module": [
		1003,
		11
	],
	"../pages/location/location.module": [
		1004,
		10
	],
	"../pages/notification/notification.module": [
		1006,
		32
	],
	"../pages/payment/payment.module": [
		1007,
		9
	],
	"../pages/profile/profile.module": [
		1005,
		8
	],
	"../pages/settings/settings.module": [
		1008,
		7
	],
	"../pages/vacation/search-vacation/search-vacation.module": [
		1009,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 264;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 562:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(563);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(567);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 567:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(949);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing__ = __webpack_require__(952);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_super_tabs__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ion2_calendar__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(349);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_authentication_sign_in_sign_in__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_services__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase__ = __webpack_require__(963);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera_ngx__ = __webpack_require__(561);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















//import { LoginPage } from '../pages/login/login';



// By default TranslateLoader will look for translation json files in i18n/
// So change this lool in the src/assets directory.


__WEBPACK_IMPORTED_MODULE_21_firebase___default.a.initializeApp({
    apiKey: "AIzaSyBbcbJT7KczQpeRtEQRmeYW6RTPq9L-37I",
    authDomain: "spadli-app.firebaseapp.com",
    databaseURL: "https://spadli-app.firebaseio.com",
    projectId: "spadli-app",
    storageBucket: "spadli-app.appspot.com",
    messagingSenderId: "404040014948"
});
function HttpLoaderFactory(http) {
    return new __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_authentication_sign_in_sign_in__["a" /* SignInPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12_angular2_swing__["SwingModule"],
                __WEBPACK_IMPORTED_MODULE_13_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15_angularfire2__["AngularFireModule"].initializeApp(__WEBPACK_IMPORTED_MODULE_17__config__["a" /* firebaseconfig */].fire),
                __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                    loader: {
                        provide: __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["a" /* TranslateLoader */],
                        useFactory: HttpLoaderFactory,
                        deps: [__WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]]
                    }
                }),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    menuType: 'overlay'
                }, {
                    links: [
                        { loadChildren: '../pages/about-us/about-us.module#AboutUsPageModule', name: 'AboutUsPage', segment: 'about-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities-details/activities-details.module#ActivitiesDetailsPageModule', name: 'ActivitiesDetailsPage', segment: 'activities-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/activities-list/activities-list.module#ActivitiesListPageModule', name: 'ActivitiesListPage', segment: 'activities-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/activities/search-activities/search-activities.module#SearchActivitiesPageModule', name: 'SearchActivitiesPage', segment: 'search-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/bus-list/bus-list.module#BusListPageModule', name: 'BusListPage', segment: 'bus-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/bus-details/bus-details.module#BusDetailsPageModule', name: 'BusDetailsPage', segment: 'bus-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/search-bus/search-bus.module#SearchBusPageModule', name: 'SearchBusPage', segment: 'search-bus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-details/car-details.module#CarDetailsPageModule', name: 'CarDetailsPage', segment: 'car-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-tabs.module#CarTabsPageModule', name: 'CarTabsPage', segment: 'car-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-list/car-list.module#CarListPageModule', name: 'CarListPage', segment: 'car-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-slider/car-slider.module#CarSliderPageModule', name: 'CarSliderPage', segment: 'car-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/search-car/search-car.module#SearchCarPageModule', name: 'SearchCarPage', segment: 'search-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/cruise-details/cruise-details.module#CruiseDetailsPageModule', name: 'CruiseDetailsPage', segment: 'cruise-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/congratulation/congratulation.module#CongratulationPageModule', name: 'CongratulationPage', segment: 'congratulation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/cruise-list/cruise-list.module#CruiseListPageModule', name: 'CruiseListPage', segment: 'cruise-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/search-cruise/search-cruise.module#SearchCruisePageModule', name: 'SearchCruisePage', segment: 'search-cruise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deals-japan/deals-japan.module#DealsPageModule', name: 'DealsJapanPage', segment: 'deals-japan', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deals/deals.module#DealsPageModule', name: 'DealsPage', segment: 'deals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight-details/flight-details.module#FlightDetailsPageModule', name: 'FlightDetailsPage', segment: 'flight-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight-list/flight-list.module#FlightListPageModule', name: 'FlightListPage', segment: 'flight-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/search-flight/search-flight.module#SearchFlightPageModule', name: 'SearchFlightPage', segment: 'search-flight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel-details/hotel-details.module#HotelDetailsPageModule', name: 'HotelDetailsPage', segment: 'hotel-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel-list/hotel-list.module#HotelListPageModule', name: 'HotelListPage', segment: 'hotel-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/order-hotel/order-hotel.module#OrderHotelPageModule', name: 'OrderHotelPage', segment: 'order-hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/search-hotels/search-hotels.module#SearchHotelsPageModule', name: 'SearchHotelsPage', segment: 'search-hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location-map/location-map.module#LocationMapPageModule', name: 'LocationMapPage', segment: 'location-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacation/search-vacation/search-vacation.module#SearchVacationPageModule', name: 'SearchVacationPage', segment: 'search-vacation', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_20__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__["a" /* IonicImageViewerModule */],
                __WEBPACK_IMPORTED_MODULE_14_ion2_calendar__["CalendarModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicApp"]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_18__pages_authentication_sign_in_sign_in__["a" /* SignInPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */],
                __WEBPACK_IMPORTED_MODULE_9__providers_data_data__["a" /* DataProvider */],
                __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__["AngularFireAuth"],
                __WEBPACK_IMPORTED_MODULE_19__services_auth_services__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_camera_ngx__["a" /* Camera */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 924:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 376,
	"./af.js": 376,
	"./ar": 377,
	"./ar-dz": 378,
	"./ar-dz.js": 378,
	"./ar-kw": 379,
	"./ar-kw.js": 379,
	"./ar-ly": 380,
	"./ar-ly.js": 380,
	"./ar-ma": 381,
	"./ar-ma.js": 381,
	"./ar-sa": 382,
	"./ar-sa.js": 382,
	"./ar-tn": 383,
	"./ar-tn.js": 383,
	"./ar.js": 377,
	"./az": 384,
	"./az.js": 384,
	"./be": 385,
	"./be.js": 385,
	"./bg": 386,
	"./bg.js": 386,
	"./bm": 387,
	"./bm.js": 387,
	"./bn": 388,
	"./bn.js": 388,
	"./bo": 389,
	"./bo.js": 389,
	"./br": 390,
	"./br.js": 390,
	"./bs": 391,
	"./bs.js": 391,
	"./ca": 392,
	"./ca.js": 392,
	"./cs": 393,
	"./cs.js": 393,
	"./cv": 394,
	"./cv.js": 394,
	"./cy": 395,
	"./cy.js": 395,
	"./da": 396,
	"./da.js": 396,
	"./de": 397,
	"./de-at": 398,
	"./de-at.js": 398,
	"./de-ch": 399,
	"./de-ch.js": 399,
	"./de.js": 397,
	"./dv": 400,
	"./dv.js": 400,
	"./el": 401,
	"./el.js": 401,
	"./en-au": 402,
	"./en-au.js": 402,
	"./en-ca": 403,
	"./en-ca.js": 403,
	"./en-gb": 404,
	"./en-gb.js": 404,
	"./en-ie": 405,
	"./en-ie.js": 405,
	"./en-il": 406,
	"./en-il.js": 406,
	"./en-nz": 407,
	"./en-nz.js": 407,
	"./eo": 408,
	"./eo.js": 408,
	"./es": 409,
	"./es-do": 410,
	"./es-do.js": 410,
	"./es-us": 411,
	"./es-us.js": 411,
	"./es.js": 409,
	"./et": 412,
	"./et.js": 412,
	"./eu": 413,
	"./eu.js": 413,
	"./fa": 414,
	"./fa.js": 414,
	"./fi": 415,
	"./fi.js": 415,
	"./fo": 416,
	"./fo.js": 416,
	"./fr": 417,
	"./fr-ca": 418,
	"./fr-ca.js": 418,
	"./fr-ch": 419,
	"./fr-ch.js": 419,
	"./fr.js": 417,
	"./fy": 420,
	"./fy.js": 420,
	"./gd": 421,
	"./gd.js": 421,
	"./gl": 422,
	"./gl.js": 422,
	"./gom-latn": 423,
	"./gom-latn.js": 423,
	"./gu": 424,
	"./gu.js": 424,
	"./he": 425,
	"./he.js": 425,
	"./hi": 426,
	"./hi.js": 426,
	"./hr": 427,
	"./hr.js": 427,
	"./hu": 428,
	"./hu.js": 428,
	"./hy-am": 429,
	"./hy-am.js": 429,
	"./id": 430,
	"./id.js": 430,
	"./is": 431,
	"./is.js": 431,
	"./it": 432,
	"./it.js": 432,
	"./ja": 433,
	"./ja.js": 433,
	"./jv": 434,
	"./jv.js": 434,
	"./ka": 435,
	"./ka.js": 435,
	"./kk": 436,
	"./kk.js": 436,
	"./km": 437,
	"./km.js": 437,
	"./kn": 438,
	"./kn.js": 438,
	"./ko": 439,
	"./ko.js": 439,
	"./ky": 440,
	"./ky.js": 440,
	"./lb": 441,
	"./lb.js": 441,
	"./lo": 442,
	"./lo.js": 442,
	"./lt": 443,
	"./lt.js": 443,
	"./lv": 444,
	"./lv.js": 444,
	"./me": 445,
	"./me.js": 445,
	"./mi": 446,
	"./mi.js": 446,
	"./mk": 447,
	"./mk.js": 447,
	"./ml": 448,
	"./ml.js": 448,
	"./mr": 449,
	"./mr.js": 449,
	"./ms": 450,
	"./ms-my": 451,
	"./ms-my.js": 451,
	"./ms.js": 450,
	"./mt": 452,
	"./mt.js": 452,
	"./my": 453,
	"./my.js": 453,
	"./nb": 454,
	"./nb.js": 454,
	"./ne": 455,
	"./ne.js": 455,
	"./nl": 456,
	"./nl-be": 457,
	"./nl-be.js": 457,
	"./nl.js": 456,
	"./nn": 458,
	"./nn.js": 458,
	"./pa-in": 459,
	"./pa-in.js": 459,
	"./pl": 460,
	"./pl.js": 460,
	"./pt": 461,
	"./pt-br": 462,
	"./pt-br.js": 462,
	"./pt.js": 461,
	"./ro": 463,
	"./ro.js": 463,
	"./ru": 464,
	"./ru.js": 464,
	"./sd": 465,
	"./sd.js": 465,
	"./se": 466,
	"./se.js": 466,
	"./si": 467,
	"./si.js": 467,
	"./sk": 468,
	"./sk.js": 468,
	"./sl": 469,
	"./sl.js": 469,
	"./sq": 470,
	"./sq.js": 470,
	"./sr": 471,
	"./sr-cyrl": 472,
	"./sr-cyrl.js": 472,
	"./sr.js": 471,
	"./ss": 473,
	"./ss.js": 473,
	"./sv": 474,
	"./sv.js": 474,
	"./sw": 475,
	"./sw.js": 475,
	"./ta": 476,
	"./ta.js": 476,
	"./te": 477,
	"./te.js": 477,
	"./tet": 478,
	"./tet.js": 478,
	"./tg": 479,
	"./tg.js": 479,
	"./th": 480,
	"./th.js": 480,
	"./tl-ph": 481,
	"./tl-ph.js": 481,
	"./tlh": 482,
	"./tlh.js": 482,
	"./tr": 483,
	"./tr.js": 483,
	"./tzl": 484,
	"./tzl.js": 484,
	"./tzm": 485,
	"./tzm-latn": 486,
	"./tzm-latn.js": 486,
	"./tzm.js": 485,
	"./ug-cn": 487,
	"./ug-cn.js": 487,
	"./uk": 488,
	"./uk.js": 488,
	"./ur": 489,
	"./ur.js": 489,
	"./uz": 490,
	"./uz-latn": 491,
	"./uz-latn.js": 491,
	"./uz.js": 490,
	"./vi": 492,
	"./vi.js": 492,
	"./x-pseudo": 493,
	"./x-pseudo.js": 493,
	"./yo": 494,
	"./yo.js": 494,
	"./zh-cn": 495,
	"./zh-cn.js": 495,
	"./zh-hk": 496,
	"./zh-hk.js": 496,
	"./zh-tw": 497,
	"./zh-tw.js": 497
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 924;

/***/ }),

/***/ 951:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(548);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authentication_sign_in_sign_in__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_services__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_storage__ = __webpack_require__(111);
/**
 * @author    ThemesBuckets <themebucketbd@gmail.com>
 * @copyright Copyright (c) 2018
 * @license   Fulcrumy
 *
 * File path - '../../src/app/app.component'
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






//import { SignInPage } from'../pages/login/login';




var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen, menuCtrl, translateService, dataProvider, auth, storage, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.translateService = translateService;
        this.dataProvider = dataProvider;
        this.auth = auth;
        this.storage = storage;
        this.events = events;
        this.name = 'test';
        this.email = 'test@test.com';
        this.photo = 'assets/imgs/avatar.png';
        this.initializeApp();
        // Set Default Language
        translateService.setDefaultLang('en');
        // Get List of Side Menu Data
        this.getSideMenuData();
        events.subscribe('user:login', function (user, time) {
            _this.name = user.name;
            _this.email = user.email;
            _this.photo = user.photo;
            // user and time are the same arguments passed in `events.publish(user, time)`      
        });
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            /*this.storage.get('login').then((val) => {
              console.log(val);
              if(val && val.name){
                this.rootPage = HomePage;
                this.events.publish('user:login', val, Date.now());
              }else{
                this.rootPage = SignInPage;
              }
            });*/
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_authentication_sign_in_sign_in__["a" /* SignInPage */];
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    /**
     * Get Menu Data from Service of `DataProvider`
     * You get `DataProvider` Service at - 'src/providers/data/data';
     */
    MyApp.prototype.getSideMenuData = function () {
        this.pages = this.dataProvider.getSideMenus();
    };
    /**
     * Open Selected Page
     * @param component
     * @param index
     */
    MyApp.prototype.openPage = function (component, index) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        if (component) {
            this.nav.setRoot(component);
            this.menuCtrl.close();
        }
        else {
            if (this.selectedMenu) {
                this.selectedMenu = 0;
            }
            else {
                this.selectedMenu = index;
            }
        }
    };
    // Logout
    MyApp.prototype.logout = function () {
        this.storage.clear();
        this.nav.setRoot('SignInPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\app\app.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Left Side Menu  -->\n<ion-menu [content]="content" *ngIf="this.platform.dir()==\'ltr\'" side="left">\n\n  <!-- Header  -->\n  <ion-header>\n    <ion-toolbar>\n      <div class="contents">\n        <div class="left">\n          <img class="logo" src="{{photo}}">\n        </div>\n        <div class="right">\n          <span class="name">{{name}}</span>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Body Content  -->\n  <ion-content>\n\n    <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p.component, i);">\n      <ion-row>\n\n        <!-- Menu Icon  -->\n        <ion-col col-3>\n          <ion-icon color="color2" [name]="p.icon" style="zoom:1.3;"></ion-icon>\n        </ion-col>\n\n        <!--  Name of Menu  -->\n        <ion-col col-9 class="menu-name">\n          <span ion-text color="color2">\n            {{p.title}}\n            <ion-icon color="color2" [name]="selectedMenu == i? \'arrow-down\' : \'arrow-forward\'" *ngIf="p.subPages" float-right></ion-icon>\n          </span>\n\n          <!-- Sub Menus  -->\n          <ion-list no-lines [hidden]="selectedMenu != i">\n            <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap (click)="openPage(subPage.component)">\n              <ion-row>\n                <!-- Icon of Sub Menu  -->\n                <ion-col col-2><i class="{{subPage.icon}}" aria-hidden="true"></i></ion-col>\n\n                <!-- Name of Sub-menu  -->\n                <ion-col col-10 class="menu-name"><span ion-text color="color2">&nbsp;{{subPage.title}}</span></ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-content>\n  <!-- End Left Side Menu  -->\n\n  <!-- Footer  -->\n  <ion-footer>\n    <!-- Logout Option  -->\n    <button ion-button full no-margin color="color1" (click)="logout()">\n      <ion-icon name="send"></ion-icon> Logout\n    </button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Right Side Menu  -->\n<ion-menu [content]="content" *ngIf="this.platform.dir()!==\'ltr\'" side="right">\n\n  <!-- Header  -->\n  <ion-header>\n    <ion-toolbar>\n      <div class="contents">\n        <div class="left">\n          <img class="logo" src="assets/imgs/avatar.png">\n        </div>\n        <div class="right">\n          <span class="name"></span>\n          <span>ionicbucket@gmail.com</span>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Content  -->\n  <ion-content>\n    <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p.component, i);">\n      <ion-row>\n\n        <!-- Menu Icon  -->\n        <ion-col col-3>\n          <ion-icon color="color2" [name]="p.icon" style="zoom:1.3;"></ion-icon>\n        </ion-col>\n\n        <!--  Name of Menu  -->\n        <ion-col col-9 class="menu-name">\n          <span ion-text color="color2">\n            {{p.title}}\n            <ion-icon color="color2" [name]="selectedMenu == i? \'arrow-down\' : \'arrow-forward\'" *ngIf="p.subPages" float-left></ion-icon>\n          </span>\n\n          <!-- Sub Menus  -->\n          <ion-list no-lines [hidden]="selectedMenu != i">\n            <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap (click)="openPage(subPage.component)">\n              <ion-row>\n                <!-- Sub Menu Icon  -->\n                <ion-col col-2><i class="{{subPage.icon}}" aria-hidden="true"></i></ion-col>\n\n                <!-- Name of Sub Menu  -->\n                <ion-col col-10 class="menu-name"><span ion-text color="color2">&nbsp;{{subPage.title}}</span></ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-content>\n\n  <!-- Footer  -->\n  <ion-footer>\n    <!-- Logout Option  -->\n    <button ion-button full no-margin color="color1" (click)="logout()">\n      <ion-icon name="send"></ion-icon> Logout\n    </button>\n  </ion-footer>\n</ion-menu>\n<!-- End Right Side Menu  -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\spadliapp\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_7__services_auth_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 962:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return firebaseconfig; });
// Initialize Firebase
var firebaseconfig = {
    fire: {
        apiKey: "AIzaSyBbcbJT7KczQpeRtEQRmeYW6RTPq9L-37I",
        authDomain: "spadli-app.firebaseapp.com",
        databaseURL: "https://spadli-app.firebaseio.com",
        projectId: "spadli-app",
        storageBucket: "spadli-app.appspot.com",
        messagingSenderId: "404040014948"
    }
};
//# sourceMappingURL=config.js.map

/***/ })

},[562]);
//# sourceMappingURL=main.js.map