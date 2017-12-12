import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//GOOGLE PLUS
import { GooglePlus } from "@ionic-native/google-plus";
import {HomePage} from "../home/home";
import {Firebase} from "@ionic-native/firebase";

import { AngularFireModule} from "angularfire2";
import firebase from 'firebase'
import { Storage } from "@ionic/storage";

import { Events } from "ionic-angular";


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private googlePlus: GooglePlus,
              public localStorage: Storage,
              public events: Events) {
  }






  logingoogle(){
    this.googlePlus.login({
      'webClientId':'770180402375-cu8lv89gjh4qo1utndk2fc3rsula100i.apps.googleusercontent.com',
      'offline':true
    }).then(res => {
      firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken));
      this.localStorage.set('datos',{
        name: res.displayName,
        email: res.em,
        email2: "awe",
        userid: res.userId,
        imageurl: res.imageUrl
      });

    }).then( suc => {
      this.navCtrl.setRoot(HomePage);
    }).catch(err => {
      console.log(err);
    })
  }

  loginfb(){
    let provider = new firebase.auth.FacebookAuthProvider_Instance();
    firebase.auth().signInWithRedirect(provider).then(()=>
    {
      firebase.auth().getRedirectResult().then((result)=>{
        alert(JSON.stringify(result));
      }).catch((err)=>{alert(err)})
    })
  }



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
