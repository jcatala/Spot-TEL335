webpackJsonp([4],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(116);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//GOOGLE PLUS





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, googlePlus, localStorage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.localStorage = localStorage;
        this.events = events;
        this.isLoggedIn = false;
    }
    LoginPage.prototype.logingoogle = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '770180402375-cu8lv89gjh4qo1utndk2fc3rsula100i.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken));
            _this.localStorage.set('datos', {
                name: res.displayName,
                email: res.em,
                email2: "awe",
                userid: res.userId,
                imageurl: res.imageUrl
            });
        }).then(function (suc) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function (err) {
            console.log(err);
        });
    };
    LoginPage.prototype.loginfb = function () {
        var provider = new __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.FacebookAuthProvider_Instance();
        __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithRedirect(provider).then(function () {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().getRedirectResult().then(function (result) {
                alert(JSON.stringify(result));
            }).catch(function (err) { alert(err); });
        });
    };
    /*
    login(){
      this.googlePlus.login({
        'webClientId':'770180402375-cu8lv89gjh4qo1utndk2fc3rsula100i.apps.googleusercontent.com',
        'offline':true
      }).then(res => {
        console.log(res);
        firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken))
          .then(suc => {
              this.navCtrl.setRoot(HomePage);
  
              this.displayName = res.displayName;
              this.email = res.em;
              this.familyName = res.familyName;
              this.givenName = res.givenName;
              this.userId = res.userId;
              this.imageUrl = res.imageURL;
              this.isLoggedIn = true;
  
            }
          ).catch(err => {
          console.log(err);
        })
      }
    }
  
    */
    LoginPage.prototype.logout = function () {
        var _this = this;
        this.googlePlus.logout().then(function (res) {
            console.log(res);
            _this.displayName = "";
            _this.email = "";
            _this.familyName = "";
            _this.givenName = "";
            _this.userId = "";
            _this.imageUrl = "";
            _this.isLoggedIn = false;
        })
            .catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoggedIn; else loginTemplate">\n    <h1>Welcome, {{displayName}}!</h1>\n    <p>Email: {{email}}<br>\n      Family Name: {{familyName}}<br>\n      Given Name: {{givenName}}<br>\n      User ID: {{userId}}</p>\n    <p><ion-avatar item-left>\n      <img src="{{imageUrl}}">\n    </ion-avatar></p>\n    <p><button ion-button (click)="logout()">Logout From Google</button></p>\n  </div>\n\n  <ng-template #loginTemplate>\n    <h1>Please Login to see your Google Account Information</h1>\n    <p><button ion-button icon-left (click)="logingoogle()">Login With Google</button></p>\n  </ng-template>\n\n  <div>\n    <button ion-button icon-left (click)="logingoogle()" block outline >\n      <ion-icon name="logo-googleplus">\n        Entra con gugul\n      </ion-icon>\n    </button>\n\n    <button ion-button icon-left (click)="loginfb()" block outline >\n      <ion-icon name="logo-facebook">\n        Entra con el feibu\n      </ion-icon>\n    </button>\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SportlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SportlistPage = (function () {
    function SportlistPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
    }
    SportlistPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SportlistPage');
    };
    SportlistPage.prototype.submit = function (what) {
        this.events.publish('sport', what);
        this.navCtrl.pop();
    };
    return SportlistPage;
}());
SportlistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sportlist',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/sportlist/sportlist.html"*/'<!--\n  Generated template for the SportlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>sportlist</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="http://pngimg.com/uploads/basketball/basketball_PNG1099.png?i=1">\n      </ion-thumbnail>\n      <h2>Basketball</h2>\n      <p>Basketball courts</p>\n      <button ion-button clear item-end (click)="submit(\'Basketball\')">Find it!</button>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/sportlist/sportlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], SportlistPage);

//# sourceMappingURL=sportlist.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the SetlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SetlocationPage = (function () {
    function SetlocationPage(navCtrl, navParams, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.searchQuery = '';
        this.initializeItems();
    }
    SetlocationPage.prototype.initializeItems = function () {
        this.items = [
            "Chile"
        ];
    };
    SetlocationPage.prototype.getItem = function (ev) {
        this.initializeItems();
        var val = ev.target.value;
        if (val && val.trim() != '') {
            this.items = this.items.filter(function (item) {
                return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
            });
        }
    };
    SetlocationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SetlocationPage');
    };
    SetlocationPage.prototype.submit = function (what) {
        this.events.publish('country', what);
        this.navCtrl.pop();
    };
    return SetlocationPage;
}());
SetlocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setlocation',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/setlocation/setlocation.html"*/'<!--\n  Generated template for the SetlocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>setlocation</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n\n    <button *ngFor="let item of items" ion-item (click)="submit(item)">\n      {{item}}\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/setlocation/setlocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */]])
], SetlocationPage);

//# sourceMappingURL=setlocation.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewspotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/**
 * Generated class for the NewspotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewspotPage = (function () {
    function NewspotPage(navCtrl, navParams, db, events, geolocation, googleplus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.events = events;
        this.geolocation = geolocation;
        this.googleplus = googleplus;
    }
    NewspotPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('Cargado!');
        //setea location
        this.location = this.navParams.get("location").toLowerCase();
        alert(this.location);
        this.tasksred = this.db.list(String(this.location));
        __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.auth().onAuthStateChanged(function (user) {
            if (user) {
                _this.userprofile = user;
            }
            else {
                _this.userprofile = null;
            }
        });
        alert(this.userprofile);
    };
    NewspotPage.prototype.submit = function () {
        var _this = this;
        this.geolocation.getCurrentPosition().then(function (resp) {
            _this.submitSpot(resp, _this.descr, _this.sport);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    NewspotPage.prototype.submitSpot = function (position, description, sport) {
        //OWN POSITION
        if (this.country == "null") {
            this.events.publish("send", "no mandado");
            this.navCtrl.pop();
        }
        else {
            var latitude = position.coords.latitude;
            var logitude = position.coords.longitude;
            var newSpotRef = this.tasksred.push({});
            newSpotRef.set({
                id: newSpotRef.key,
                author: "ELPICO",
                description: String(description),
                likes: 0,
                dislikes: 0,
                location: String(latitude) + "," + String(logitude),
                sport: String(sport)
            });
            this.events.publish("send", "mandado");
            this.navCtrl.pop();
        }
    };
    return NewspotPage;
}());
NewspotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newspot',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/newspot/newspot.html"*/'<!--\n  Generated template for the NewspotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>newspot</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Sport!</ion-label>\n      <ion-select [(ngModel)]="sport">\n        <ion-option value="Basketball">Basketball</ion-option>\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="descr" placeholder="Descr"></ion-input>\n    </ion-item>\n  </ion-list>\n\n <button ion-button (click)="submit()">Send it !</button>\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/newspot/newspot.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]])
], NewspotPage);

//# sourceMappingURL=newspot.js.map

/***/ }),

/***/ 165:
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
webpackEmptyAsyncContext.id = 165;

/***/ }),

/***/ 207:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		485,
		3
	],
	"../pages/newspot/newspot.module": [
		486,
		2
	],
	"../pages/setlocation/setlocation.module": [
		487,
		1
	],
	"../pages/sportlist/sportlist.module": [
		488,
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
webpackAsyncContext.id = 207;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setlocation_setlocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_current_info_current_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__newspot_newspot__ = __webpack_require__(155);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











//PRUEBAS DE DATABASEFIREBASE



var HomePage = (function () {
    function HomePage(navCtrl, navParams, geolocation, googleMaps, events, http, storage, userInfo, db, googleplus, localstorage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.events = events;
        this.http = http;
        this.storage = storage;
        this.userInfo = userInfo;
        this.db = db;
        this.googleplus = googleplus;
        this.localstorage = localstorage;
        this.items = [];
        this.country = "null";
        this.tasks = db.list('/chile-pruebas');
        var localData = this.http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        if (this.navParams.get("firstPassed") != null) {
            this.marker(this.navParams.get("firstPassed"));
        }
    }
    //FIREBASE API
    //
    HomePage.prototype.goto_list = function () {
        var _this = this;
        var sport = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__["a" /* SportlistPage */]);
        this.events.subscribe('sport', function (sport) {
            if (_this.country != "null") {
                _this.marker(sport);
                _this.events.unsubscribe('sport');
                //
                //
            }
            else {
                alert("Please, set county");
                _this.events.unsubscribe("sport");
            }
        });
    };
    HomePage.prototype.goto_new_spot = function () {
        var spot = null;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__newspot_newspot__["a" /* NewspotPage */], {
            location: this.country
        });
        this.events.subscribe("send", function (send) {
            if (send != "mandado") {
                alert("no mandado");
            }
            else {
                alert("Mandado !");
            }
        });
    };
    HomePage.prototype.goto_country = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__setlocation_setlocation__["a" /* SetlocationPage */]);
        this.events.subscribe('country', function (country) {
            _this.country = country;
            alert(_this.country);
            _this.getJson();
            _this.events.unsubscribe('country');
        });
    };
    HomePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HomePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].childen[j].open;
    };
    HomePage.prototype.getJson = function () {
        var _this = this;
        if (this.country != "null") {
            this.http.get('https://spottel335.firebaseio.com/' + this.country.toLowerCase() + '.json')
                .map(function (res) { return res.json(); }).subscribe(function (data) {
                _this.items.push(data);
                console.log(_this.items);
            });
        }
    };
    HomePage.prototype.marker = function (what) {
        var _this = this;
        this.map.clear();
        var pos2 = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](-33, -75);
        var mk = {
            position: pos2,
            title: "probando12"
        };
        this.map.addMarker(mk);
        /*   let latitude = total[0];
           let longitude = total[1];
           let pos3: LatLng = new LatLng(latitude, longitude);
           let mk2: MarkerOptions = {
             position: pos3,
             title: 'probando jotason'
           };
           this.map.addMarker(mk2);
       
           let s1 = String(this.items[0]['bmx']);
           let as = s1.split('#');
           console.log(as,as[0]);
           let vina: LatLng = new LatLng(parseFloat(as[0]),parseFloat(as[1]));
           let mk3: MarkerOptions = {
             position: vina,
             title: "esta alive"
           };
           this.map.addMarker(mk3);
       */
        //INTENTO DE FUNCION
        /*
            for(let i = 0; i < this.items[0][what].length(); i++){
        
              let pos_parcial = String(this.items[0][what][i]);
              console.log(pos_parcial);
              let pos_parcial_split = pos_parcial.split("#");
              let pos_marker: LatLng = new LatLng(parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
              let marker: MarkerOptions = {
                  position: pos_marker,
                  title: what
              };
              this.map.addMarker(marker);
            }
            */
        var localdb = [];
        this.db.database.ref(this.country.toLowerCase()).once('value', function (snapshot) {
            snapshot.forEach(function (snap) {
                localdb.push(snap.val());
                return false;
            });
        }).then(function () {
            for (var i = 0; i < localdb.length; i++) {
                if (localdb[i]["sport"] == String(what)) {
                    var pos_parcial = String(localdb[i]["location"]);
                    var pos_parcial_split = pos_parcial.split(",");
                    var pos_marker = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
                    var marker = {
                        position: pos_marker,
                        title: String(localdb[i]["description"]),
                        animation: __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].DROP
                    };
                    _this.map.addMarker(marker);
                }
            }
        });
        /*
        for(let i = 0; i < this.items[0].length; i++){
          let sport = String(this.items[0][i][0]);
          console.log(this.storage.get(this.items[0][i][0]));
          if (sport == String(what)){
            let pos_parcial = String(this.items[0][i][1]);
            let pos_parcial_split = pos_parcial.split(",");
            let pos_marker: LatLng = new LatLng(parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
            let marker: MarkerOptions = {
              position: pos_marker,
              title: String(this.items[0][i][2]),
              animation: GoogleMapsAnimation.DROP
            };
            this.map.addMarker(marker);
          }
        }
    */
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.obtenerPosicion();
        alert(this.localstorage.get('datos')['email']);
        //SACA DATOS DE GITHUB, OJO QUE DEBE CAMBIAR CON LA LOCACIÓN PENDIENTE!
        /*
            this.http.get('https://spottel335.firebaseio.com/.json')
              .map(res => res.json()).subscribe(data => {
              this.items.push(data);
              console.log(this.items);
              //SET KEYS
              for (let i = 0; this.items[0].length; i++){
                this.storage.set(this.items[0][i][0],[]);
              }
              //FULLKEYS
              for(let i = 0; i < this.items[0].length; i++){
                let arrtmp = [this.items[0][i][1],this.items[0][i][2]]; // VALUE FROM JSON
                console.log(arrtmp);
                let keyvalue = this.storage.get(this.items[0][i][1]);     //VALUE FROM STORAGE
                keyvalue.then( (value) => {
                  value.push([this.items[0][i][1], this.items[0][i][2]]);
                  this.storage.set(this.items[0][i][0], value);
                  console.log(value);
                }).catch((err) => {
                  console.log(err);
                });           //PUSH TO STORAGE
              }
            });
        */
    };
    HomePage.prototype.obtenerPosicion = function () {
        var _this = this;
        //this.geolocation.watchPosition().subscribe().then
        this.geolocation.getCurrentPosition().then(function (response) {
            _this.loadMap(response);
        })
            .catch(function (error) {
            console.log(error);
        });
    };
    HomePage.prototype.loadMap = function (positiona) {
        var _this = this;
        var latitude = positiona.coords.latitude;
        var longitud = positiona.coords.longitude;
        console.log(latitude, longitud);
        //CREA UN MAPA PASANDO UN ELEMENTO HTML:D
        var element = document.getElementById('map');
        var map = this.googleMaps.create(element);
        this.map = map;
        //CREAT LATITUDE OBJECT
        var myPosition = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](latitude, longitud);
        var pos1 = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](-33, -74);
        // CAMERA POSITION
        var position = {
            target: myPosition,
            zoom: 18,
            tilt: 60,
        };
        map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MAP_READY).then(function () {
            console.log('MAP RUDY');
            //REFRESH SELF POSITION TRY
            _this.map.setMyLocationEnabled(true);
            //camera to pos
            map.moveCamera(position);
            //new marker
            var markerOptions = {
                position: myPosition,
                title: 'U here' + myPosition.lat + myPosition.lng
            };
            map.addMarker(markerOptions);
            //NUEVO EVENTO PRUEBAS:
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Demo SPOT\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id=\'map\'>\n      <div>\n        <button ion-button (click)="goto_list()" onclick="goto_list()"> SET SPORT</button>\n        <button ion-button (click)="goto_country()" onclick="goto_country()">Set country </button>\n        <button ion-button (click)="goto_new_spot()" >Send a spot</button>\n      </div>\n  </div>\n\n  <!--\n\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.name }}\n      </button>\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <button ion-item (click)="toggleItem(i,j)" detail-none class="child-item" *ngIf="child.children">\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n          </button>\n          <ion-item *ngIf="!child.children" detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase >{{child.information}}</p>\n            <button ion-button outline item-end (click)="marker(child.name)">{{child.information}}</button>\n          </ion-item>\n\n        </ion-list-header>\n\n      </ion-list>\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n-->\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__providers_current_info_current_info__["a" /* CurrentInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentInfoProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the CurrentInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var CurrentInfoProvider = (function () {
    function CurrentInfoProvider() {
        console.log('Hello CurrentInfoProvider Provider');
    }
    CurrentInfoProvider.prototype.setSport = function (what) {
        this.sport = what;
    };
    CurrentInfoProvider.prototype.setLocation = function (what) {
        this.location = what;
    };
    return CurrentInfoProvider;
}());
CurrentInfoProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CurrentInfoProvider);

//# sourceMappingURL=current-info.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(324);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 324:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(484);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setlocation_setlocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_current_info_current_info__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var firebaseConfig = {
    apiKey: "AIzaSyBHdREPqCH_-sfTi16natq1FrBn9Ob0yPA",
    authDomain: "spottel335.firebaseapp.com",
    databaseURL: "https://spottel335.firebaseio.com",
    projectId: "spottel335",
    storageBucket: "spottel335.appspot.com",
    messagingSenderId: "770180402375"
};
__WEBPACK_IMPORTED_MODULE_16_firebase___default.a.initializeApp(firebaseConfig);
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__["a" /* SportlistPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_setlocation_setlocation__["a" /* SetlocationPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__["a" /* NewspotPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newspot/newspot.module#NewspotPageModule', name: 'NewspotPage', segment: 'newspot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setlocation/setlocation.module#SetlocationPageModule', name: 'SetlocationPage', segment: 'setlocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sportlist/sportlist.module#SportlistPageModule', name: 'SportlistPage', segment: 'sportlist', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__["a" /* SportlistPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_setlocation_setlocation__["a" /* SetlocationPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__["a" /* NewspotPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_current_info_current_info__["a" /* CurrentInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabase */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 484:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(306);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[308]);
//# sourceMappingURL=main.js.map