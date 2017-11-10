webpackJsonp([0],{

/***/ 108:
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
webpackEmptyAsyncContext.id = 108;

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

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_util__ = __webpack_require__(2);
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
    function HomePage(navCtrl, geolocation, googleMaps, http, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.geolocation = geolocation;
        this.googleMaps = googleMaps;
        this.http = http;
        this.storage = storage;
        this.items = [];
        var localData = this.http.get('assets/information.json').map(function (res) { return res.json().items; });
        localData.subscribe(function (data) {
            _this.information = data;
        });
        var localbd = this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json')
            .map(function (res) { return res.json().items; });
        localbd.subscribe(function (data) {
            _this.maindata = data;
        });
    }
    //FIREBASE API
    //
    HomePage.prototype.toggleSection = function (i) {
        this.information[i].open = !this.information[i].open;
    };
    HomePage.prototype.toggleItem = function (i, j) {
        this.information[i].children[j].open = !this.information[i].childen[j].open;
    };
    HomePage.prototype.getJson = function () {
        return this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json').map(function (res) { return res.json(); });
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
        console.log("el len es: " + this.items.sports);
        for (var i = 0; i < this.items.length; i++) {
            if (!Object(__WEBPACK_IMPORTED_MODULE_7_ionic_angular_util_util__["p" /* isUndefined */])(this.items[i][what]) && this.items[i][what]) {
                var pos_parcial = String(this.items[i][String(what)]);
                console.log(this.items[i][what]);
                var pos_parcial_split = pos_parcial.split(",");
                var pos_marker = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* LatLng */](parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
                var marker = {
                    position: pos_marker,
                    title: what
                };
                this.map.addMarker(marker);
                console.log(what);
            }
            ;
        }
        ;
    };
    HomePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.obtenerPosicion();
        //SACA DATOS DE GITHUB, OJO QUE DEBE CAMBIAR CON LA LOCACIÓN PENDIENTE!
        this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json')
            .map(function (res) { return res.json(); }).subscribe(function (data) {
            _this.items.push(data);
            console.log("data: ", data, "items:", _this.items[0]['bmx'], "maindata:");
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
        selector: 'page-home',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>\n      Demo SPOT\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id=\'map\'></div>\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.name }}\n      </button>\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <button ion-item (click)="toggleItem(i,j)" detail-none class="child-item" *ngIf="child.children">\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n          </button>\n          <ion-item *ngIf="!child.children" detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase >{{child.information}}</p>\n            <button ion-button outline item-end (click)="marker(child.name)">{{child.information}}</button>\n          </ion-item>\n\n        </ion-list-header>\n\n      </ion-list>\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */]) === "function" && _e || Object])
], HomePage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 199:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(218);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(194);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[199]);
//# sourceMappingURL=main.js.map