webpackJsonp([39],{

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(180);
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
                _this.storage.set('name', result.user.displayName);
                _this.storage.set('email', result.user.email);
                _this.storage.set('pic', result.user.photoURL);
                _this.objLoggedUser.email = result.user.email;
                _this.objLoggedUser.name = result.user.displayName;
                _this.objLoggedUser.photo = result.user.photoURL;
                nav.setRoot('HomePage');
                _this.events.publish('user:login', _this.objLoggedUser, Date.now());
            });
        }
        else {
            return this.afAuth.auth.signInWithRedirect(provider)
                .then(function () {
                return _this.afAuth.auth.getRedirectResult().then(function (result) {
                    console.log(result);
                    // This gives you a Google Access Token.
                    // You can use it to access the Google API.
                    //let token = result.credential.accessToken;
                    // The signed-in user info.
                    //let user = result.user;
                    //console.log(token, user);
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

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(209);
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
                    }, {
                        title: 'Car',
                        icon: 'fa fa-car',
                        component: 'SearchCarPage',
                    }, {
                        title: 'Bus',
                        icon: 'fa fa-bus',
                        component: 'SearchBusPage',
                    }, {
                        title: 'Train',
                        icon: 'fa fa-train',
                        component: 'SearchTrainPage',
                    }, {
                        title: 'Vacation',
                        icon: 'fa fa-globe',
                        component: 'SearchVacationPage',
                    }, {
                        title: 'Cruise',
                        icon: 'fa fa-ship',
                        component: 'SearchCruisePage',
                    }, {
                        title: 'Activities',
                        icon: 'fa fa-snowflake-o',
                        component: 'SearchActivitiesPage',
                    }]
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
                image: 'assets/imgs/background/img5.jpeg'
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

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_services__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(180);
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
        this.name = 'test';
        this.email = 'test@test.com';
        this.photo = 'assets/imgs/avatar.png';
        this.objLoggedUser = {
            name: "",
            email: "",
            photo: "assets/imgs/avatar.png"
        };
        this.menuCtrl.enable(false); // Disable SideMenu        
        // this.storage.get('name').then((val) => {      
        //   this.objLoggedUser.name=val;
        // });    
        // this.storage.get('email').then((val) => {      
        //   this.objLoggedUser.email=val;
        // });
        // this.storage.get('photo').then((val) => {      
        //   this.objLoggedUser.photo=val;
        // });
        // if(this.objLoggedUser.name){
        //   this.navCtrl.setRoot('HomePage');      
        //   this.events.publish('user:login', this.objLoggedUser, Date.now());
        //   return;
        // }
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
            selector: 'page-sign-in',template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\sign-in\sign-in.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n\n<!-- Login Page -->\n\n<ion-content>\n  <div class="container">\n\n    <!-- Title of Page  -->\n    <div class="top-content" text-center>\n      <div class="animated fadeInDown title">SIGN IN</div>\n    </div>\n\n    <!-- Sign In Form  -->\n    <div class="form-content">\n\n      <form class="animated slideInUp" (ngSubmit)="signInForm" [formGroup]="signInForm">\n        <ion-list>\n\n          <!-- Email Address -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-mail" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="email" placeholder="Your Email Address" name="email" formControlName="email" [(ngModel)]="signInForm.email"\n              [class.invalid]="!signInForm.controls.email.valid && signInForm.controls.email.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Email Validation Message  -->\n          <div class="error-message" *ngIf="!signInForm.controls.email.valid  && signInForm.controls.email.dirty">\n            <p>Please enter a valid email address.</p>\n          </div>\n\n          <!-- Password -->\n          <ion-item>\n            <ion-label>\n              <ion-icon name="md-eye" color="color2"></ion-icon>\n            </ion-label>\n            <ion-input type="password" placeholder="Your Password" name="password" formControlName="password" [(ngModel)]="signInForm.password"\n              [class.invalid]="!signInForm.controls.password.valid && signInForm.controls.password.dirty"></ion-input>\n          </ion-item>\n\n          <!-- Password Validation Message  -->\n          <div class="error-message" *ngIf="!signInForm.controls.password.valid  && signInForm.controls.password.dirty">\n            <p>Please enter a valid password.</p>\n          </div>\n\n          <!-- Forget Password Button  -->\n          <ion-item no-lines text-right>\n            <button ion-button clear color="color3" (tap)="goToForgetPasswordPage()">Forget Password?</button>\n          </ion-item>\n        </ion-list>\n\n        <!-- Sign In Button  -->\n        <button ion-button round block type="button" class="custom-btn" (tap)="doLogin()" (click)="doLogin()">\n            Sign In\n        </button>\n\n        <!-- Sign Up Button  -->\n        <ion-row justify-content-center align-items-center>\n          <button ion-button clear type="button" color="color3" (tap)="goToSignUpPage()" (click)="goToSignUpPage()">\n              Dont have an account? Sign Up\n          </button>\n        </ion-row>\n\n        <p text-center>Or Sign In Using</p>\n\n        <!-- Social Buttons  -->\n        <ion-row justify-content-center align-items-center>\n          <!-- Facebook  -->\n          <button ion-fab mini class="facebook">\n            <span class="fa fa-facebook " aria-hidden="true"></span>\n          </button>\n          <!-- Google  -->\n          <button ion-fab mini class="google" (tap)="doLogingoogle()">\n            <span class="fa fa-google " aria-hidden="true"></span>\n          </button>\n          <!-- Twitter  -->\n        \n        </ion-row>\n        {{signInError}}\n      </form>\n    </div>\n  </div>\n</ion-content>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\pages\authentication\sign-in\sign-in.html"*/,
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

/***/ 220:
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
webpackEmptyAsyncContext.id = 220;

/***/ }),

/***/ 263:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/about-us/about-us.module": [
		969,
		30
	],
	"../pages/activities/activities-details/activities-details.module": [
		970,
		29
	],
	"../pages/activities/activities-list/activities-list.module": [
		971,
		28
	],
	"../pages/activities/search-activities/search-activities.module": [
		972,
		6
	],
	"../pages/authentication/forget-password/forget-password.module": [
		976,
		37
	],
	"../pages/authentication/sign-in/sign-in.module": [
		973,
		38
	],
	"../pages/authentication/sign-up/sign-up.module": [
		974,
		36
	],
	"../pages/bus/bus-details/bus-details.module": [
		975,
		27
	],
	"../pages/bus/bus-list/bus-list.module": [
		977,
		26
	],
	"../pages/bus/search-bus/search-bus.module": [
		978,
		5
	],
	"../pages/car/car-details/car-details.module": [
		979,
		25
	],
	"../pages/car/car-tabs/car-list/car-list.module": [
		980,
		35
	],
	"../pages/car/car-tabs/car-slider/car-slider.module": [
		981,
		34
	],
	"../pages/car/car-tabs/car-tabs.module": [
		982,
		24
	],
	"../pages/car/search-car/search-car.module": [
		983,
		4
	],
	"../pages/checkout/checkout.module": [
		984,
		23
	],
	"../pages/congratulation/congratulation.module": [
		985,
		33
	],
	"../pages/contact-us/contact-us.module": [
		986,
		22
	],
	"../pages/cruise/cruise-details/cruise-details.module": [
		987,
		21
	],
	"../pages/cruise/cruise-list/cruise-list.module": [
		988,
		20
	],
	"../pages/cruise/search-cruise/search-cruise.module": [
		995,
		3
	],
	"../pages/deals/deals.module": [
		989,
		19
	],
	"../pages/flight/flight-details/flight-details.module": [
		990,
		18
	],
	"../pages/flight/flight-list/flight-list.module": [
		991,
		17
	],
	"../pages/flight/search-flight/search-flight.module": [
		992,
		2
	],
	"../pages/home/home.module": [
		993,
		16
	],
	"../pages/hotel/hotel-details/hotel-details.module": [
		994,
		15
	],
	"../pages/hotel/hotel-list/hotel-list.module": [
		996,
		14
	],
	"../pages/hotel/order-hotel/order-hotel.module": [
		999,
		13
	],
	"../pages/hotel/search-hotels/search-hotels.module": [
		997,
		1
	],
	"../pages/landing/landing.module": [
		998,
		32
	],
	"../pages/language/language.module": [
		1003,
		12
	],
	"../pages/location-map/location-map.module": [
		1000,
		11
	],
	"../pages/location/location.module": [
		1001,
		10
	],
	"../pages/notification/notification.module": [
		1002,
		31
	],
	"../pages/payment/payment.module": [
		1004,
		9
	],
	"../pages/profile/profile.module": [
		1007,
		8
	],
	"../pages/settings/settings.module": [
		1005,
		7
	],
	"../pages/vacation/search-vacation/search-vacation.module": [
		1006,
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
webpackAsyncContext.id = 263;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 561:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(562);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(566);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 566:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export HttpLoaderFactory */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_http_loader__ = __webpack_require__(945);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(947);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_data_data__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_ionic2_rating__ = __webpack_require__(559);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ionic_img_viewer__ = __webpack_require__(557);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing__ = __webpack_require__(951);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_angular2_swing___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_angular2_swing__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ionic2_super_tabs__ = __webpack_require__(560);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ion2_calendar__ = __webpack_require__(558);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_ion2_calendar___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_ion2_calendar__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(960);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_angularfire2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_auth___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_angularfire2_auth__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__config__ = __webpack_require__(961);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_authentication_sign_in_sign_in__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_services__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_storage__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase__ = __webpack_require__(962);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_21_firebase__);
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
                        { loadChildren: '../pages/activities/search-activities/search-activities.module#SearchActivitiesPageModule', name: 'SearchActivitiesPage', segment: 'search-activities', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/sign-in/sign-in.module#SignInPageModule', name: 'SignInPage', segment: 'sign-in', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/sign-up/sign-up.module#SignUpPageModule', name: 'SignUpPage', segment: 'sign-up', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/bus-details/bus-details.module#BusDetailsPageModule', name: 'BusDetailsPage', segment: 'bus-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/authentication/forget-password/forget-password.module#ForgetPasswordPageModule', name: 'ForgetPasswordPage', segment: 'forget-password', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/bus-list/bus-list.module#BusListPageModule', name: 'BusListPage', segment: 'bus-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bus/search-bus/search-bus.module#SearchBusPageModule', name: 'SearchBusPage', segment: 'search-bus', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-details/car-details.module#CarDetailsPageModule', name: 'CarDetailsPage', segment: 'car-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-list/car-list.module#CarListPageModule', name: 'CarListPage', segment: 'car-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-slider/car-slider.module#CarSliderPageModule', name: 'CarSliderPage', segment: 'car-slider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/car-tabs/car-tabs.module#CarTabsPageModule', name: 'CarTabsPage', segment: 'car-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/car/search-car/search-car.module#SearchCarPageModule', name: 'SearchCarPage', segment: 'search-car', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/checkout/checkout.module#CheckoutPageModule', name: 'CheckoutPage', segment: 'checkout', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/congratulation/congratulation.module#CongratulationPageModule', name: 'CongratulationPage', segment: 'congratulation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/contact-us/contact-us.module#ContactUsPageModule', name: 'ContactUsPage', segment: 'contact-us', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/cruise-details/cruise-details.module#CruiseDetailsPageModule', name: 'CruiseDetailsPage', segment: 'cruise-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/cruise-list/cruise-list.module#CruiseListPageModule', name: 'CruiseListPage', segment: 'cruise-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/deals/deals.module#DealsPageModule', name: 'DealsPage', segment: 'deals', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight-details/flight-details.module#FlightDetailsPageModule', name: 'FlightDetailsPage', segment: 'flight-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/flight-list/flight-list.module#FlightListPageModule', name: 'FlightListPage', segment: 'flight-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/flight/search-flight/search-flight.module#SearchFlightPageModule', name: 'SearchFlightPage', segment: 'search-flight', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel-details/hotel-details.module#HotelDetailsPageModule', name: 'HotelDetailsPage', segment: 'hotel-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/cruise/search-cruise/search-cruise.module#SearchCruisePageModule', name: 'SearchCruisePage', segment: 'search-cruise', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/hotel-list/hotel-list.module#HotelListPageModule', name: 'HotelListPage', segment: 'hotel-list', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/search-hotels/search-hotels.module#SearchHotelsPageModule', name: 'SearchHotelsPage', segment: 'search-hotels', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/landing/landing.module#LandingPageModule', name: 'LandingPage', segment: 'landing', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/hotel/order-hotel/order-hotel.module#OrderHotelPageModule', name: 'OrderHotelPage', segment: 'order-hotel', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location-map/location-map.module#LocationMapPageModule', name: 'LocationMapPage', segment: 'location-map', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/location/location.module#LocationPageModule', name: 'LocationPage', segment: 'location', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/notification/notification.module#NotificationPageModule', name: 'NotificationPage', segment: 'notification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/language/language.module#LanguagePageModule', name: 'LanguagePage', segment: 'language', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/payment/payment.module#PaymentPageModule', name: 'PaymentPage', segment: 'payment', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/settings/settings.module#SettingsPageModule', name: 'SettingsPage', segment: 'settings', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/vacation/search-vacation/search-vacation.module#SearchVacationPageModule', name: 'SearchVacationPage', segment: 'search-vacation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] }
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
                __WEBPACK_IMPORTED_MODULE_19__services_auth_services__["a" /* AuthService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 604:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 349,
	"./af.js": 349,
	"./ar": 350,
	"./ar-dz": 351,
	"./ar-dz.js": 351,
	"./ar-kw": 352,
	"./ar-kw.js": 352,
	"./ar-ly": 353,
	"./ar-ly.js": 353,
	"./ar-ma": 354,
	"./ar-ma.js": 354,
	"./ar-sa": 355,
	"./ar-sa.js": 355,
	"./ar-tn": 356,
	"./ar-tn.js": 356,
	"./ar.js": 350,
	"./az": 357,
	"./az.js": 357,
	"./be": 358,
	"./be.js": 358,
	"./bg": 359,
	"./bg.js": 359,
	"./bm": 360,
	"./bm.js": 360,
	"./bn": 361,
	"./bn.js": 361,
	"./bo": 362,
	"./bo.js": 362,
	"./br": 363,
	"./br.js": 363,
	"./bs": 364,
	"./bs.js": 364,
	"./ca": 365,
	"./ca.js": 365,
	"./cs": 366,
	"./cs.js": 366,
	"./cv": 367,
	"./cv.js": 367,
	"./cy": 368,
	"./cy.js": 368,
	"./da": 369,
	"./da.js": 369,
	"./de": 370,
	"./de-at": 371,
	"./de-at.js": 371,
	"./de-ch": 372,
	"./de-ch.js": 372,
	"./de.js": 370,
	"./dv": 373,
	"./dv.js": 373,
	"./el": 374,
	"./el.js": 374,
	"./en-au": 375,
	"./en-au.js": 375,
	"./en-ca": 376,
	"./en-ca.js": 376,
	"./en-gb": 377,
	"./en-gb.js": 377,
	"./en-ie": 378,
	"./en-ie.js": 378,
	"./en-il": 379,
	"./en-il.js": 379,
	"./en-nz": 380,
	"./en-nz.js": 380,
	"./eo": 381,
	"./eo.js": 381,
	"./es": 382,
	"./es-do": 383,
	"./es-do.js": 383,
	"./es-us": 384,
	"./es-us.js": 384,
	"./es.js": 382,
	"./et": 385,
	"./et.js": 385,
	"./eu": 386,
	"./eu.js": 386,
	"./fa": 387,
	"./fa.js": 387,
	"./fi": 388,
	"./fi.js": 388,
	"./fo": 389,
	"./fo.js": 389,
	"./fr": 390,
	"./fr-ca": 391,
	"./fr-ca.js": 391,
	"./fr-ch": 392,
	"./fr-ch.js": 392,
	"./fr.js": 390,
	"./fy": 393,
	"./fy.js": 393,
	"./gd": 394,
	"./gd.js": 394,
	"./gl": 395,
	"./gl.js": 395,
	"./gom-latn": 396,
	"./gom-latn.js": 396,
	"./gu": 397,
	"./gu.js": 397,
	"./he": 398,
	"./he.js": 398,
	"./hi": 399,
	"./hi.js": 399,
	"./hr": 400,
	"./hr.js": 400,
	"./hu": 401,
	"./hu.js": 401,
	"./hy-am": 402,
	"./hy-am.js": 402,
	"./id": 403,
	"./id.js": 403,
	"./is": 404,
	"./is.js": 404,
	"./it": 405,
	"./it.js": 405,
	"./ja": 406,
	"./ja.js": 406,
	"./jv": 407,
	"./jv.js": 407,
	"./ka": 408,
	"./ka.js": 408,
	"./kk": 409,
	"./kk.js": 409,
	"./km": 410,
	"./km.js": 410,
	"./kn": 411,
	"./kn.js": 411,
	"./ko": 412,
	"./ko.js": 412,
	"./ky": 413,
	"./ky.js": 413,
	"./lb": 414,
	"./lb.js": 414,
	"./lo": 415,
	"./lo.js": 415,
	"./lt": 416,
	"./lt.js": 416,
	"./lv": 417,
	"./lv.js": 417,
	"./me": 418,
	"./me.js": 418,
	"./mi": 419,
	"./mi.js": 419,
	"./mk": 420,
	"./mk.js": 420,
	"./ml": 421,
	"./ml.js": 421,
	"./mr": 422,
	"./mr.js": 422,
	"./ms": 423,
	"./ms-my": 424,
	"./ms-my.js": 424,
	"./ms.js": 423,
	"./mt": 425,
	"./mt.js": 425,
	"./my": 426,
	"./my.js": 426,
	"./nb": 427,
	"./nb.js": 427,
	"./ne": 428,
	"./ne.js": 428,
	"./nl": 429,
	"./nl-be": 430,
	"./nl-be.js": 430,
	"./nl.js": 429,
	"./nn": 431,
	"./nn.js": 431,
	"./pa-in": 432,
	"./pa-in.js": 432,
	"./pl": 433,
	"./pl.js": 433,
	"./pt": 434,
	"./pt-br": 435,
	"./pt-br.js": 435,
	"./pt.js": 434,
	"./ro": 436,
	"./ro.js": 436,
	"./ru": 437,
	"./ru.js": 437,
	"./sd": 438,
	"./sd.js": 438,
	"./se": 439,
	"./se.js": 439,
	"./si": 440,
	"./si.js": 440,
	"./sk": 441,
	"./sk.js": 441,
	"./sl": 442,
	"./sl.js": 442,
	"./sq": 443,
	"./sq.js": 443,
	"./sr": 444,
	"./sr-cyrl": 445,
	"./sr-cyrl.js": 445,
	"./sr.js": 444,
	"./ss": 446,
	"./ss.js": 446,
	"./sv": 447,
	"./sv.js": 447,
	"./sw": 448,
	"./sw.js": 448,
	"./ta": 449,
	"./ta.js": 449,
	"./te": 450,
	"./te.js": 450,
	"./tet": 451,
	"./tet.js": 451,
	"./tg": 452,
	"./tg.js": 452,
	"./th": 453,
	"./th.js": 453,
	"./tl-ph": 454,
	"./tl-ph.js": 454,
	"./tlh": 455,
	"./tlh.js": 455,
	"./tr": 456,
	"./tr.js": 456,
	"./tzl": 457,
	"./tzl.js": 457,
	"./tzm": 458,
	"./tzm-latn": 459,
	"./tzm-latn.js": 459,
	"./tzm.js": 458,
	"./ug-cn": 460,
	"./ug-cn.js": 460,
	"./uk": 461,
	"./uk.js": 461,
	"./ur": 462,
	"./ur.js": 462,
	"./uz": 463,
	"./uz-latn": 464,
	"./uz-latn.js": 464,
	"./uz.js": 463,
	"./vi": 465,
	"./vi.js": 465,
	"./x-pseudo": 466,
	"./x-pseudo.js": 466,
	"./yo": 467,
	"./yo.js": 467,
	"./zh-cn": 468,
	"./zh-cn.js": 468,
	"./zh-hk": 469,
	"./zh-hk.js": 469,
	"./zh-tw": 470,
	"./zh-tw.js": 470
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
webpackContext.id = 604;

/***/ }),

/***/ 947:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(546);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(549);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_data_data__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_authentication_sign_in_sign_in__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_auth_services__ = __webpack_require__(116);
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
    function MyApp(platform, statusBar, splashScreen, menuCtrl, translateService, dataProvider, auth, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.menuCtrl = menuCtrl;
        this.translateService = translateService;
        this.dataProvider = dataProvider;
        this.auth = auth;
        this.events = events;
        // Root Page of Application
        this.rootPage = 'LandingPage';
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_6__pages_authentication_sign_in_sign_in__["a" /* SignInPage */];
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
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
        this.nav.setRoot('LandingPage');
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"C:\xampp\htdocs\TravelApp\TravelAgency\src\app\app.html"*/'<!-- \n  - @author    ThemesBuckets <themebucketbd@gmail.com>\n  - @copyright Copyright (c) 2018\n  - @license   Fulcrumy\n-->\n<!-- Left Side Menu  -->\n<ion-menu [content]="content" *ngIf="this.platform.dir()==\'ltr\'" side="left">\n\n  <!-- Header  -->\n  <ion-header>\n    <ion-toolbar>\n      <div class="contents">\n        <div class="left">\n          <img class="logo" src="{{photo}}">\n        </div>\n        <div class="right">\n          <span class="name">{{name}}</span>\n          <span>{{email}}</span>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Body Content  -->\n  <ion-content>\n\n    <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p.component, i);">\n      <ion-row>\n\n        <!-- Menu Icon  -->\n        <ion-col col-3>\n          <ion-icon color="color2" [name]="p.icon" style="zoom:1.3;"></ion-icon>\n        </ion-col>\n\n        <!--  Name of Menu  -->\n        <ion-col col-9 class="menu-name">\n          <span ion-text color="color2">\n            {{p.title}}\n            <ion-icon color="color2" [name]="selectedMenu == i? \'arrow-down\' : \'arrow-forward\'" *ngIf="p.subPages" float-right></ion-icon>\n          </span>\n\n          <!-- Sub Menus  -->\n          <ion-list no-lines [hidden]="selectedMenu != i">\n            <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap (click)="openPage(subPage.component)">\n              <ion-row>\n                <!-- Icon of Sub Menu  -->\n                <ion-col col-2><i class="{{subPage.icon}}" aria-hidden="true"></i></ion-col>\n\n                <!-- Name of Sub-menu  -->\n                <ion-col col-10 class="menu-name"><span ion-text color="color2">&nbsp;{{subPage.title}}</span></ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-content>\n  <!-- End Left Side Menu  -->\n\n  <!-- Footer  -->\n  <ion-footer>\n    <!-- Logout Option  -->\n    <button ion-button full no-margin color="color1" (click)="logout()">\n      <ion-icon name="send"></ion-icon> Logout\n    </button>\n  </ion-footer>\n</ion-menu>\n\n<!-- Right Side Menu  -->\n<ion-menu [content]="content" *ngIf="this.platform.dir()!==\'ltr\'" side="right">\n\n  <!-- Header  -->\n  <ion-header>\n    <ion-toolbar>\n      <div class="contents">\n        <div class="left">\n          <img class="logo" src="assets/imgs/avatar.png">\n        </div>\n        <div class="right">\n          <span class="name"></span>\n          <span>ionicbucket@gmail.com</span>\n        </div>\n      </div>\n    </ion-toolbar>\n  </ion-header>\n\n  <!-- Content  -->\n  <ion-content>\n    <ion-item ion-item *ngFor="let p of pages;  let i=index" (click)="openPage(p.component, i);">\n      <ion-row>\n\n        <!-- Menu Icon  -->\n        <ion-col col-3>\n          <ion-icon color="color2" [name]="p.icon" style="zoom:1.3;"></ion-icon>\n        </ion-col>\n\n        <!--  Name of Menu  -->\n        <ion-col col-9 class="menu-name">\n          <span ion-text color="color2">\n            {{p.title}}\n            <ion-icon color="color2" [name]="selectedMenu == i? \'arrow-down\' : \'arrow-forward\'" *ngIf="p.subPages" float-left></ion-icon>\n          </span>\n\n          <!-- Sub Menus  -->\n          <ion-list no-lines [hidden]="selectedMenu != i">\n            <ion-item no-border *ngFor="let subPage of p.subPages;let i2=index" text-wrap (click)="openPage(subPage.component)">\n              <ion-row>\n                <!-- Sub Menu Icon  -->\n                <ion-col col-2><i class="{{subPage.icon}}" aria-hidden="true"></i></ion-col>\n\n                <!-- Name of Sub Menu  -->\n                <ion-col col-10 class="menu-name"><span ion-text color="color2">&nbsp;{{subPage.title}}</span></ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-item>\n  </ion-content>\n\n  <!-- Footer  -->\n  <ion-footer>\n    <!-- Logout Option  -->\n    <button ion-button full no-margin color="color1" (click)="logout()">\n      <ion-icon name="send"></ion-icon> Logout\n    </button>\n  </ion-footer>\n</ion-menu>\n<!-- End Right Side Menu  -->\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"C:\xampp\htdocs\TravelApp\TravelAgency\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
            __WEBPACK_IMPORTED_MODULE_5__providers_data_data__["a" /* DataProvider */], __WEBPACK_IMPORTED_MODULE_7__services_auth_services__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 961:
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

},[561]);
//# sourceMappingURL=main.js.map