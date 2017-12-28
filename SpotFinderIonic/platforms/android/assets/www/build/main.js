webpackJsonp([5],{

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(117);
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
            _this.user = res;
        }).then(function (suc) {
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], {
                datos: _this.user
            });
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
        selector: 'page-login',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/'<ion-header>\n</ion-header>\n\n<ion-content padding>\n  <div *ngIf="isLoggedIn; else loginTemplate">\n    <h1>Welcome, {{displayName}}!</h1>\n    <p>Email: {{email}}<br>\n      Family Name: {{familyName}}<br>\n      Given Name: {{givenName}}<br>\n      User ID: {{userId}}</p>\n    <p><ion-avatar item-left>\n      <img src="{{imageUrl}}">\n    </ion-avatar></p>\n    <p><button ion-button (click)="logout()">Logout From Google</button></p>\n  </div>\n<!--\n  <ng-template #loginTemplate>\n    <h1>Please Login to see your Google Account Information</h1>\n  </ng-template>\n-->\n  <div>\n    <button ion-button icon-left (click)="logingoogle()" block outline >\n      <ion-icon name="logo-googleplus">\n        Login with Google account !\n      </ion-icon>\n    </button>\n\n  </div>\n\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/login/login.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SportlistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
        selector: 'page-sportlist',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/sportlist/sportlist.html"*/'<!--\n  Generated template for the SportlistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Set sport here !</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n\n  <ion-list>\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/basket50.png">\n      </ion-thumbnail>\n      <h2>Basketball</h2>\n      <p>Basketball courts</p>\n      <button ion-button clear item-end (click)="submit(\'Basketball\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/futbol50.png">\n      </ion-thumbnail>\n      <h2>Football</h2>\n      <p>Football courts</p>\n      <button ion-button clear item-end (click)="submit(\'Football\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/tenis50.png">\n      </ion-thumbnail>\n      <h2>Tennis</h2>\n      <p>Tennis courts</p>\n      <button ion-button clear item-end (click)="submit(\'Tennis\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/agg50.png">\n      </ion-thumbnail>\n      <h2>Aggressive Skate</h2>\n      <button ion-button clear item-end (click)="submit(\'Aggressive Skate\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/skate50.png">\n      </ion-thumbnail>\n      <h2>Skate</h2>\n      <p>Basketball courts</p>\n      <button ion-button clear item-end (click)="submit(\'Skate\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/bicicleta50.png">\n      </ion-thumbnail>\n      <h2>BMX</h2>\n      <button ion-button clear item-end (click)="submit(\'BMX\')">Find it!</button>\n    </ion-item>\n\n\n    <ion-item>\n      <ion-thumbnail item-start>\n        <img src="https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/parkour50.png">\n      </ion-thumbnail>\n      <h2>Parkour</h2>\n      <button ion-button clear item-end (click)="submit(\'Parkour\')">Find it!</button>\n    </ion-item>\n\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/sportlist/sportlist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], SportlistPage);

//# sourceMappingURL=sportlist.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SetlocationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
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
    function SetlocationPage(navCtrl, navParams, events, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.events = events;
        this.loadingCtrl = loadingCtrl;
        this.searchQuery = '';
        this.initializeItems();
    }
    SetlocationPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            // content: 'Please wait... working !',
            content: "\n      <div class=\"custom-spinner-container\">\n        <p>Making changes, please wait...</p>\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2500);
    };
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
        this.presentLoadingDefault();
        this.navCtrl.pop();
    };
    return SetlocationPage;
}());
SetlocationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-setlocation',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/setlocation/setlocation.html"*/'<!--\n  Generated template for the SetlocationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Set Location here !</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n  <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n  <ion-list>\n\n    <button *ngFor="let item of items" ion-item (click)="submit(item)">\n      {{item}}\n    </button>\n\n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/setlocation/setlocation.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SetlocationPage);

//# sourceMappingURL=setlocation.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewspotPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(268);
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
    function NewspotPage(navCtrl, navParams, db, events, geolocation, googleplus, camera, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.events = events;
        this.geolocation = geolocation;
        this.googleplus = googleplus;
        this.camera = camera;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
    }
    NewspotPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            // content: 'Please wait... working !',
            content: "\n      <div class=\"custom-spinner-container\">\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 5000);
    };
    NewspotPage.prototype.ionViewDidLoad = function () {
        console.log('Cargado!');
        this.user_info = this.navParams.get('user_info');
        //setea location
        this.location = this.navParams.get("location").toLowerCase();
        this.tasksred = this.db.list(String(this.location));
        this.mypicref = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref('/' + this.location);
        this.picurl = "null";
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
            if (this.picurl != "null" && this.sport != undefined) {
                var latitude = position.coords.latitude;
                var logitude = position.coords.longitude;
                var newSpotRef = this.tasksred.push({});
                var key = newSpotRef.key;
                newSpotRef.set({
                    id: key,
                    author: this.user_info['displayName'],
                    description: String(description),
                    likes: 0,
                    dislikes: 0,
                    location: String(latitude) + "," + String(logitude),
                    sport: String(sport)
                });
                this.upload(key);
                this.events.publish("send", "mandado");
                this.presentLoadingDefault();
                this.navCtrl.pop();
            }
            else {
                if (this.picurl == "null") {
                    var alert_1 = this.alertCtrl.create({
                        title: "No image added.",
                        message: "Please, take a picture !",
                        buttons: ['OK']
                    });
                    alert_1.present();
                }
                if (this.sport == undefined) {
                    var alert_2 = this.alertCtrl.create({
                        title: "No sport defined",
                        message: "Please, select a sport !",
                        buttons: ['OK']
                    });
                    alert_2.present();
                }
            }
        }
    };
    NewspotPage.prototype.capture = function () {
        var _this = this;
        var cameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
        };
        this.camera.getPicture(cameraOptions)
            .then(function (imagedata) {
            //this.picurl = 'data:image/jpeg;base64' + imagedata;
            _this.picurl = "data:image/jpeg;base64," + imagedata;
        }, function (err) {
            console.log(err);
        });
    };
    NewspotPage.prototype.upload = function (id) {
        var storageRef = __WEBPACK_IMPORTED_MODULE_5_firebase___default.a.storage().ref();
        //FILENAME
        var filename = id;
        //REFERENCE
        var imageRef = storageRef.child("images/" + filename + ".jpg");
        //UPLOAD
        imageRef.putString(this.picurl, 'data_url');
    };
    return NewspotPage;
}());
NewspotPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-newspot',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/newspot/newspot.html"*/'<!--\n  Generated template for the NewspotPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>Share the spot !</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>Sport!</ion-label>\n      <ion-select [(ngModel)]="sport">\n        <ion-option value="Aggressive Skate">Aggressive Skate</ion-option>\n\n        <ion-option value="BMX">BMX</ion-option>\n\n        <ion-option value="Skate">Skate</ion-option>\n\n        <ion-option value="Parkour">Parkour</ion-option>\n\n        <ion-option value="Basketball">Basketball</ion-option>\n\n        <ion-option value="Football">Football</ion-option>\n\n        <ion-option value="Tennis">Tennis</ion-option>\n\n      </ion-select>\n    </ion-item>\n\n    <ion-item>\n      <ion-input type="text" [(ngModel)]="descr" placeholder="Descr"></ion-input>\n    </ion-item>\n  </ion-list>\n\n <button ion-button (click)="submit()">Send it !</button>\n\n  <button ion-button (click)="capture()">\n    Set imagen\n  </button>\n  <img [src]="picurl" *ngIf="picurl">\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/newspot/newspot.html"*/,
        providers: [__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */]]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], NewspotPage);

//# sourceMappingURL=newspot.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpotinfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
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
 * Generated class for the SpotinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SpotinfoPage = (function () {
    function SpotinfoPage(navCtrl, navParams, db, alertCtrl, loadingCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.alertCtrl = alertCtrl;
        this.loadingCtrl = loadingCtrl;
        this.dislikedado = 0;
        this.likedado = 0;
    }
    SpotinfoPage.prototype.presentLoadingDefault = function () {
        var loading = this.loadingCtrl.create({
            // content: 'Please wait... working !',
            content: "\n      <div class=\"custom-spinner-container\">\n      <p>Loading content... please wait</p>\n        <div class=\"custom-spinner-box\"></div>\n      </div>",
        });
        loading.present();
        setTimeout(function () {
            loading.dismiss();
        }, 2000);
    };
    SpotinfoPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad SpotinfoPage');
        console.log(this.navParams.get('info'));
        console.log(this.navParams.get('user'));
        this.id = this.navParams.get('info');
        this.country = this.navParams.get('country').toLowerCase();
        this.user = this.navParams.get('user');
        this.db.database.ref('/' + this.country + '/' + this.id)
            .once('value', function (snapshot) {
            console.log(snapshot.val());
            _this.likes = snapshot.val()['likes'];
            _this.dislikes = snapshot.val()['dislikes'];
            _this.description = snapshot.val()['description'];
            _this.author = snapshot.val()['author'];
        });
        //ASIGNACION DE VALORES
        try {
            __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref().child('/images/' + this.id + '.jpg')
                .getDownloadURL().then(function (url) {
                _this.imgsource = url;
            });
            this.presentLoadingDefault();
        }
        catch (err) {
            console.log(err);
        }
    };
    SpotinfoPage.prototype.darLike = function () {
        var _this = this;
        if (this.likedado == 0) {
            this.db.database.ref('/' + this.country + '/' + this.id)
                .once('value', function (snapshot) {
                var val = snapshot.val();
                _this.likes = parseFloat(val['likes']) + 1;
                _this.likedado = 1;
                snapshot.ref.update({
                    likes: _this.likes
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: "Already done !",
                message: "One like per 'day' !",
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    SpotinfoPage.prototype.darDislikes = function () {
        var _this = this;
        if (this.dislikedado == 0) {
            this.db.database.ref('/' + this.country + '/' + this.id)
                .once('value', function (snapshot) {
                var val = snapshot.val();
                _this.dislikes = parseFloat(val['dislikes']) + 1;
                _this.dislikedado = 1;
                snapshot.ref.update({
                    dislikes: _this.dislikes
                }, function (err) {
                    console.log(err);
                });
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "Already done !",
                message: "One like per 'day' !",
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    return SpotinfoPage;
}());
SpotinfoPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-spotinfo',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/spotinfo/spotinfo.html"*/'<!--\n  Generated template for the SpotinfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar color="primary">\n    <ion-title>About the spot !</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-card>\n    <!-- AQUI VA LA IMAGEN\n    <img src="source"/>\n    -->\n    <img [src]="imgsource" *ngIf="imgsource">\n\n    <ion-card-content>\n      <ion-card-title>\n        {{tittle}}\n      </ion-card-title>\n      <p>\n        Author: {{author}}\n      </p>\n      <p>\n        {{description}}\n      </p>\n    </ion-card-content>\n    <ion-row no-padding>\n      <ion-col>\n        <button ion-button clear big [color]="secondary" icon-start (click)="darLike()">\n          <ion-icon name="thumbs-up"></ion-icon>\n          {{likes}}\n        </button>\n      </ion-col>\n\n      <ion-col text-center>\n        <button ion-button clear big color="cyan" icon-start>\n          <ion-icon name="share"></ion-icon>\n          share !\n        </button>\n      </ion-col>\n\n      <ion-col text-end>\n        <button ion-button clear big color="danger" icon-start (click)="darDislikes()">\n          <ion-icon name="thumbs-down"></ion-icon>\n          {{dislikes}}\n        </button>\n      </ion-col>\n\n    </ion-row>\n\n  </ion-card>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/spotinfo/spotinfo.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
], SpotinfoPage);

//# sourceMappingURL=spotinfo.js.map

/***/ }),

/***/ 166:
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
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 208:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/login/login.module": [
		487,
		4
	],
	"../pages/newspot/newspot.module": [
		488,
		3
	],
	"../pages/setlocation/setlocation.module": [
		489,
		2
	],
	"../pages/sportlist/sportlist.module": [
		490,
		1
	],
	"../pages/spotinfo/spotinfo.module": [
		491,
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
webpackAsyncContext.id = 208;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__setlocation_setlocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_current_info_current_info__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__newspot_newspot__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__spotinfo_spotinfo__ = __webpack_require__(156);
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
    function HomePage(navCtrl, navParams, geolocation, googleMaps, events, http, storage, userInfo, db, googleplus, localstorage, alertCtrl) {
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
        this.alertCtrl = alertCtrl;
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
        if (this.country != "null") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__sportlist_sportlist__["a" /* SportlistPage */]);
            this.events.subscribe('sport', function (sport) {
                if (_this.country != "null") {
                    _this.marker(sport);
                    _this.events.unsubscribe('sport');
                    //
                    //
                }
                else {
                    var alert_1 = _this.alertCtrl.create({
                        title: "No country set...",
                        message: "Please, set a country !",
                        buttons: ['OK']
                    });
                    alert_1.present();
                    _this.events.unsubscribe("sport");
                }
            });
        }
        else {
            var alert_2 = this.alertCtrl.create({
                title: "No country set...",
                message: "Please, set a country !",
                buttons: ['OK']
            });
            alert_2.present();
        }
    };
    HomePage.prototype.goto_new_spot = function () {
        var _this = this;
        var spot = null;
        if (this.country != "null") {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_12__newspot_newspot__["a" /* NewspotPage */], {
                location: this.country,
                user_info: this.user_info
            });
            this.events.subscribe("send", function (send) {
                if (send != "mandado") {
                    var alert_3 = _this.alertCtrl.create({
                        title: "ERROR",
                        message: "Error on sending spot :(",
                        buttons: ['OK']
                    });
                    alert_3.present();
                }
                else {
                    var alert_4 = _this.alertCtrl.create({
                        title: "Successfull !",
                        message: "New spot available ! ",
                        buttons: ['OK']
                    });
                    alert_4.present();
                }
            });
        }
        else {
            var alert_5 = this.alertCtrl.create({
                title: "No country set...",
                message: "Please, set a country !",
                buttons: ['OK']
            });
            alert_5.present();
        }
    };
    HomePage.prototype.goto_country = function () {
        var _this = this;
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_8__setlocation_setlocation__["a" /* SetlocationPage */]);
        this.events.subscribe('country', function (country) {
            _this.country = country;
            var alert = _this.alertCtrl.create({
                title: "New country set!",
                message: "Current country: " + _this.country,
                buttons: ['OK']
            });
            alert.present();
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
            var _loop_1 = function (i) {
                if (localdb[i]["sport"] == String(what)) {
                    var pos_parcial = String(localdb[i]["location"]);
                    var pos_parcial_split = pos_parcial.split(",");
                    var pos_marker = new __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["d" /* LatLng */](parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
                    var iconurl = void 0;
                    if (String(what) == "Parkour") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/parkour50.png";
                    }
                    if (String(what) == "Basketball") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/basket50.png";
                    }
                    if (String(what) == "Football") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/futbol50.png";
                    }
                    if (String(what) == "Tennis") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/tenis50.png";
                    }
                    if (String(what) == "Aggressive Skate") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/agg50.png";
                    }
                    if (String(what) == "Skate") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/skate50.png";
                    }
                    if (String(what) == "BMX") {
                        iconurl = "https://raw.githubusercontent.com/jcatala/Spot-TEL335/dev/pins/bicicleta50.png";
                    }
                    var marker = {
                        position: pos_marker,
                        //title: String(localdb[i]["description"]),
                        animation: __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["b" /* GoogleMapsAnimation */].DROP,
                        icon: iconurl
                    };
                    _this.map.addMarker(marker).then(function (marker) {
                        marker.on(__WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["c" /* GoogleMapsEvent */].MARKER_CLICK).subscribe(function (res) {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_13__spotinfo_spotinfo__["a" /* SpotinfoPage */], {
                                info: localdb[i]['id'],
                                user: _this.user_info,
                                country: _this.country
                            });
                        });
                    });
                }
            };
            for (var i = 0; i < localdb.length; i++) {
                _loop_1(i);
            }
        });
    };
    HomePage.prototype.ionViewDidLoad = function () {
        this.user_info = this.navParams.get('datos');
        this.obtenerPosicion();
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
            //NUEVO EVENTO PRUEBAS:
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-row padding-vertical >\n      <ion-col >\n        <button ion-button color="secondary" small round (click)="goto_list()" >Set sport</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button color="secondary" small round (click)="goto_country()">Set country</button>\n      </ion-col>\n      <ion-col text-center>\n        <button ion-button color="secondary" small round (click)="goto_new_spot()">Send a spot</button>\n      </ion-col>\n    </ion-row>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <div id=\'map\'>\n      <div>\n<!--\n        <ion-fab left middle>\n          <button ion-fab color="dark">\n            <ion-icon name="arrow-dropup"></ion-icon>\n          </button>\n          <ion-fab-list side="top">\n            <button ion-fab (click)="goto_list()">\n              <ion-icon name="star"></ion-icon>\n              <ion-label>Set Sport</ion-label>\n            </button>\n\n            <button ion-fab (click)="goto_country()">\n              <ion-icon name="locate"></ion-icon>\n              <ion-label>Set country</ion-label>\n            </button>\n\n\n            <button ion-fab (click)="goto_new_spot()" >\n              <ion-icon name="send"></ion-icon>\n              <ion-label>Send a spot</ion-label>\n            </button>\n\n          </ion-fab-list>\n        </ion-fab>\n-->\n      </div>\n  </div>\n\n  <!--\n\n  <ion-list class="accordion-list">\n    <ion-list-header *ngFor="let item of information; let i = index" no-lines no-padding>\n      <button ion-item (click)="toggleSection(i)" detail-none [ngClass]="{\'section-active\': item.open, \'section\': !item.open}">\n        <ion-icon item-left name="arrow-forward" *ngIf="!item.open"></ion-icon>\n        <ion-icon item-left name="arrow-down" *ngIf="item.open"></ion-icon>\n        {{ item.name }}\n      </button>\n      <ion-list *ngIf="item.children && item.open" no-lines>\n        <ion-list-header *ngFor="let child of item.children; let j = index" no-padding>\n          <button ion-item (click)="toggleItem(i,j)" detail-none class="child-item" *ngIf="child.children">\n          <ion-icon item-left name="add" *ngIf="!child.open"></ion-icon>\n          <ion-icon item-left name="close" *ngIf="child.open"></ion-icon>\n          {{ child.name }}\n          </button>\n          <ion-item *ngIf="!child.children" detail-none class="child-item" text-wrap>\n            <h2>{{ child.name }}</h2>\n            <p text-lowercase >{{child.information}}</p>\n            <button ion-button outline item-end (click)="marker(child.name)">{{child.information}}</button>\n          </ion-item>\n\n        </ion-list-header>\n\n      </ion-list>\n    </ion-list-header>\n  </ion-list>\n</ion-content>\n-->\n'/*ion-inline-end:"/home/jose/usm/2017-2/appweb/proyectoSpot/SpotFinderIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_geolocation__["a" /* Geolocation */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_maps__["a" /* GoogleMaps */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */],
        __WEBPACK_IMPORTED_MODULE_5__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_9__providers_current_info_current_info__["a" /* CurrentInfoProvider */],
        __WEBPACK_IMPORTED_MODULE_10_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 214:
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

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(311);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(326);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(486);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_home_home__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_http__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_storage__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(66);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_login_login__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_setlocation_setlocation__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_current_info_current_info__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_spotinfo_spotinfo__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__ = __webpack_require__(268);
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
            __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__["a" /* NewspotPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_spotinfo_spotinfo__["a" /* SpotinfoPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_9__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], {}, {
                links: [
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/newspot/newspot.module#NewspotPageModule', name: 'NewspotPage', segment: 'newspot', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/setlocation/setlocation.module#SetlocationPageModule', name: 'SetlocationPage', segment: 'setlocation', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/sportlist/sportlist.module#SportlistPageModule', name: 'SportlistPage', segment: 'sportlist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/spotinfo/spotinfo.module#SpotinfoPageModule', name: 'SpotinfoPage', segment: 'spotinfo', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_10__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["b" /* AngularFireDatabaseModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_sportlist_sportlist__["a" /* SportlistPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_setlocation_setlocation__["a" /* SetlocationPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_newspot_newspot__["a" /* NewspotPage */],
            __WEBPACK_IMPORTED_MODULE_20__pages_spotinfo_spotinfo__["a" /* SpotinfoPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_geolocation__["a" /* Geolocation */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_google_maps__["a" /* GoogleMaps */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_18__providers_current_info_current_info__["a" /* CurrentInfoProvider */],
            __WEBPACK_IMPORTED_MODULE_19_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_camera__["a" /* Camera */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(309);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(308);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[310]);
//# sourceMappingURL=main.js.map