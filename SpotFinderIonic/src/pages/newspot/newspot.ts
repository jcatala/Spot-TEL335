import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AngularFireDatabase} from "angularfire2/database";
import { AngularFireList } from "angularfire2/database";
import { Firebase } from "@ionic-native/firebase";
import {Events } from "ionic-angular";

import { Geolocation } from "@ionic-native/geolocation";
import { Geoposition } from "@ionic-native/geolocation";
import {stringify} from "@angular/core/src/util";
import { GooglePlus } from "@ionic-native/google-plus";
import firebase from 'firebase';

import {Camera, CameraOptions} from "@ionic-native/camera";


/**
 * Generated class for the NewspotPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newspot',
  templateUrl: 'newspot.html',
  providers: [GooglePlus]
})
export class NewspotPage {

  location: any;

  coords: any;

  tasksred: AngularFireList<any>;

  sport: string;
  descr:string;


  country: string;

  userprofile: any;
  email: any;

  user_info: {};

  picdata: any;
  picurl: any;
  mypicref: any;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              public db:AngularFireDatabase,
              public events: Events,
              public geolocation: Geolocation,
              private googleplus: GooglePlus,
              private camera: Camera) {
  }

  ionViewDidLoad() {
    console.log('Cargado!');
    this.user_info = this.navParams.get('user_info');

    //setea location
    this.location = this.navParams.get("location").toLowerCase();

    this.tasksred = this.db.list(String(this.location));

    this.mypicref = firebase.storage().ref('/' + this.location);


  }

  submit(){
    this.geolocation.getCurrentPosition().then(resp => {
      this.submitSpot(resp, this.descr,this.sport);
    })
      .catch( err => {
        console.log(err);
      })
  }

  submitSpot(position: Geoposition, description, sport){
    //OWN POSITION
    if(this.country == "null"){
      this.events.publish("send", "no mandado");
      this.navCtrl.pop();
    }
    else {

      let latitude = position.coords.latitude;

      let logitude = position.coords.longitude;

      let newSpotRef = this.tasksred.push({});

      newSpotRef.set({
        id: newSpotRef.key,
        author: this.user_info['email'],
        description: String(description),
        likes: 0,
        dislikes: 0,
        location: String(latitude) + "," + String(logitude),
        sport: String(sport)
      });
      this.events.publish("send", "mandado");
      this.navCtrl.pop();
    }


  }

  capture(){

    const cameraOptions: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    };

    this.camera.getPicture(cameraOptions)
      .then((imagedata) => {
        this.picurl = 'data:image/jpeg;base64' + imagedata;
      },err => {
        console.log(err);
      });

  }



}
