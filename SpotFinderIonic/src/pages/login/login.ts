import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//GOOGLE PLUS
import { GooglePlus } from "@ionic-native/google-plus";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [GooglePlus]
})
export class LoginPage {

  displayName: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;
  isLoggedIn:boolean = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus) {
  }

  login(){
    this.googlePlus.login({}).then(res => {
      console.log(res);
      this.displayName = res.displayName;
      this.email = res.em;
      this.familyName = res.familyName;
      this.givenName = res.givenName;
      this.userId = res.userId;
      this.imageUrl = res.imageURL;

      this.isLoggedIn = true;
      this.navCtrl.setRoot(HomePage);
    })
      .catch(err => console.error(err));
  }

  logout(){
    this.googlePlus.logout().then(res => {
      console.log(res);
      this.displayName = "";
      this.email = "";
      this.familyName = "";
      this.givenName = "";
      this.userId = "";
      this.imageUrl = "";

      this.isLoggedIn = false;
    })
      .catch(err => console.error(err));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
