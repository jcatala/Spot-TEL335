webpackJsonp([2],{

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
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
    function LoginPage(navCtrl, navParams, googlePlus) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.googlePlus = googlePlus;
        this.isLoggedIn = false;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        this.googlePlus.login({
            'webClientId': '770180402375-cu8lv89gjh4qo1utndk2fc3rsula100i.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth().signInWithCredential(__WEBPACK_IMPORTED_MODULE_4_firebase___default.a.auth.GoogleAuthProvider.credential(res.idToken));
        }).then(function (suc) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
        }).catch(function (err) {
            console.log(err);
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
        selector: 'page-login',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoggedIn; else loginTemplate">\n    <h1>Welcome, {{displayName}}!</h1>\n    <p>Email: {{email}}<br>\n      Family Name: {{familyName}}<br>\n      Given Name: {{givenName}}<br>\n      User ID: {{userId}}</p>\n    <p><ion-avatar item-left>\n      <img src="{{imageUrl}}">\n    </ion-avatar></p>\n    <p><button ion-button (click)="logout()">Logout From Google</button></p>\n  </div>\n\n  <ng-template #loginTemplate>\n    <h1>Please Login to see your Google Account Information</h1>\n    <p><button ion-button (click)="login()">Login With Google</button></p>\n  </ng-template>\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
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

/***/ 150:
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
webpackEmptyAsyncContext.id = 150;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		444,
		1
	],
	"../pages/sportlist/sportlist.module": [
		445,
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
webpackAsyncContext.id = 192;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(332);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__ = __webpack_require__(142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var HomePage = (function () {
    function HomePage(navCtrl, navParams, geolocation, googleMaps, events, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.events = events;
        this.http = http;
        this.storage = storage;
        this.items = [];
        var localData = this.http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        var localbd = this.http.get('https://spottel335.firebaseio.com/.json')
            .map(function (res) { return res.json().items; });
        localbd.subscribe(function (data) {
            _this.maindata = data;
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
        this.events.subscribe('sport', function (sport) {
            _this.marker(sport);
        });
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__["a" /* SportlistPage */]);
    };
    HomePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HomePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].childen[j].open;
    };
    HomePage.prototype.getJson = function () {
        return this.http.get('https://spottel335.firebaseio.com/.json').map(function (res) { return res.json(); });
    };
    HomePage.prototype.marker = function (what) {
        this.map.clear();
        var pos2 = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](-33, -75);
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
        for (var i = 0; i < this.items[0].length; i++) {
            var sport = String(this.items[0][i][0]);
            if (sport == String(what)) {
                var pos_parcial = String(this.items[0][i][1]);
                var pos_parcial_split = pos_parcial.split(",");
                var pos_marker = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
                var marker = {
                    position: pos_marker,
                    title: String(this.items[0][i][2])
                };
                this.map.addMarker(marker);
            }
        }
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.obtenerPosicion();
        //SACA DATOS DE GITHUB, OJO QUE DEBE CAMBIAR CON LA LOCACIÓN PENDIENTE!
        this.http.get('https://spottel335.firebaseio.com/.json')
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.items.push(data);
        });
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
        var myPosition = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](latitude, longitud);
        var pos1 = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](-33, -74);
        // CAMERA POSITION
        var position = {
            target: myPosition,
            zoom: 18,
            tilt: 30
        };
        map.one(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsEvent */].MAP_READY).then(function () {
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
            var mo = {
                position: pos1,
                title: 'VInAYHUEA'
            };
            map.addMarker(markerOptions);
            map.addMarker(mo);
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Demo SPOT\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id=\'map\'>\n      <div>\n        <button ion-button (click)="goto_list()" onclick="goto_list()"> SET SPORT</button>\n      </div>\n  </div>\n\n  <!--\n\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.name }}\n      </button>\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <button ion-item (click)="toggleItem(i,j)" detail-none class="child-item" *ngIf="child.children">\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n          </button>\n          <ion-item *ngIf="!child.children" detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase >{{child.information}}</p>\n            <button ion-button outline item-end (click)="marker(child.name)">{{child.information}}</button>\n          </ion-item>\n\n        </ion-list-header>\n\n      </ion-list>\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n-->\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 283:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(302);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 302:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(434);
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
__WEBPACK_IMPORTED_MODULE_14_firebase___default.a.initializeApp(firebaseConfig);
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
            __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__["a" /* SportlistPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sportlist/sportlist.module#SportlistPageModule', name: 'SportlistPage', segment: 'sportlist', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__["a" /* SportlistPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 433:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(140);
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

},[283]);
//# sourceMappingURL=main.js.map