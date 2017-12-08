import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { Geolocation } from "@ionic-native/geolocation";
import { GoogleMaps } from "@ionic-native/google-maps";


import { HttpModule} from "@angular/http";
import { Firebase} from "@ionic-native/firebase";
import { IonicStorageModule } from "@ionic/storage";
import {GooglePlus} from "@ionic-native/google-plus";
import {LoginPage} from "../pages/login/login";
import {SportlistPage} from "../pages/sportlist/sportlist";
import { SetlocationPage} from "../pages/setlocation/setlocation";
import firebase from "firebase";
import {AngularFireModule} from "angularfire2";
import { CurrentInfoProvider } from '../providers/current-info/current-info';
import { AngularFireDatabase } from "angularfire2/database";
import {AngularFireDatabaseModule} from "angularfire2/database";


export const firebaseConfig = {
    apiKey: "AIzaSyBHdREPqCH_-sfTi16natq1FrBn9Ob0yPA",
    authDomain: "spottel335.firebaseapp.com",
    databaseURL: "https://spottel335.firebaseio.com",
    projectId: "spottel335",
    storageBucket: "spottel335.appspot.com",
    messagingSenderId: "770180402375"
};

firebase.initializeApp(firebaseConfig);

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SportlistPage,
    SetlocationPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SportlistPage,
    SetlocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    GoogleMaps,
    GooglePlus,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CurrentInfoProvider,
    AngularFireDatabase
  ]
})
export class AppModule {}
