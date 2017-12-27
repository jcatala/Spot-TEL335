import { Component } from '@angular/core';
import {NavController, IonicPage, NavParams} from 'ionic-angular';

import 'rxjs/add/operator/map';

import { Geolocation, Geoposition} from "@ionic-native/geolocation";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker, GoogleMapsAnimation
} from "@ionic-native/google-maps";
import { Http} from "@angular/http";
import { Storage } from "@ionic/storage";
import {IonicStorageModule} from "@ionic/storage";
import { Firebase} from "@ionic-native/firebase";

import {isUndefined} from "ionic-angular/util/util";
import {SportlistPage} from "../sportlist/sportlist";
import { SetlocationPage } from "../setlocation/setlocation";

import { Events } from "ionic-angular";


import { CurrentInfoProvider } from "../../providers/current-info/current-info";
import {count} from "rxjs/operator/count";

//PRUEBAS DE DATABASEFIREBASE

import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import { FirebaseListObservable } from "angularfire2/database-deprecated";
import {GooglePlus} from "@ionic-native/google-plus";
import {NewspotPage} from "../newspot/newspot";
import {SpotinfoPage} from "../spotinfo/spotinfo";

import {AlertController} from "ionic-angular";


declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  user_info: {};
  information: any[];

  public items: Array<any> = [];

  country: string = "null";

  //FIREBASE DATABASE TRY
  tasks: AngularFireList<any>;
  tasksref: AngularFireList<any>;


  map: GoogleMap;


  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              public events: Events,
              private http: Http,
              private storage: Storage,
              public userInfo: CurrentInfoProvider,
              public db: AngularFireDatabase,
              private googleplus: GooglePlus,
              public localstorage:Storage,
              public alertCtrl: AlertController) {



    this.tasks = db.list('/chile-pruebas');

    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });

    if(this.navParams.get("firstPassed") != null){
      this.marker(this.navParams.get("firstPassed"));
    }

  }

  //FIREBASE API


  //

  goto_list(){
    let sport = null;
      if (this.country != "null") {
        this.navCtrl.push(SportlistPage);
        this.events.subscribe('sport', sport => {
          if (this.country != "null") {
            this.marker(sport);
            this.events.unsubscribe('sport');
            //
            //

          }
          else {

            let alert = this.alertCtrl.create({
              title: "No country set...",
              message: "Please, set a country !",
              buttons: ['OK']
            });
            alert.present();

            this.events.unsubscribe("sport");
          }
        });
      }
      else{
        let alert = this.alertCtrl.create({
          title: "No country set...",
          message: "Please, set a country !",
          buttons: ['OK']
        });
        alert.present();
      }

  }

  goto_new_spot(){
    let spot = null;
      if(this.country != "null") {
        this.navCtrl.push(NewspotPage, {
          location: this.country,
          user_info: this.user_info
        });
        this.events.subscribe("send", send => {
          if (send != "mandado") {
            let alert = this.alertCtrl.create({
              title: "ERROR",
              message: "Error on sending spot :(",
              buttons: ['OK']
            });
            alert.present();

          }
          else {
            let alert = this.alertCtrl.create({
              title: "Successfull !",
              message: "New spot available ! ",
              buttons: ['OK']
            });
            alert.present();
          }
        });
      }else{
        let alert = this.alertCtrl.create({
          title: "No country set...",
          message: "Please, set a country !",
          buttons: ['OK']
        });
        alert.present();
      }

  }

  goto_country(){

    this.navCtrl.push(SetlocationPage);
    this.events.subscribe('country', country => {
      this.country = country;

      let alert = this.alertCtrl.create({
        title: "New country set!",
        message: "Current country: "+ this.country,
        buttons: ['OK']
      });
      alert.present();


      this.getJson();
      this.events.unsubscribe('country');
    })
  }



  toggleSection(i){
    this.information[i].open = !this.information[i].open;
  }
  toggleItem(i,j) {
    this.information[i].children[j].open = !this.information[i].childen[j].open;

  }

  getJson(){

    if(this.country != "null") {
      this.http.get('https://spottel335.firebaseio.com/' + this.country.toLowerCase() + '.json')
        .map(res => res.json()).subscribe(data => {
        this.items.push(data);
        console.log(this.items);

      });
    }


  }

  marker(what){

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

    let localdb = [];
    this.db.database.ref(this.country.toLowerCase()).once('value',
      (snapshot) => {
      snapshot.forEach(snap => {
        localdb.push(snap.val());
        return false;
      })
    }).then(() => {
      for (let i = 0; i < localdb.length; i++){
        if(localdb[i]["sport"] == String(what)){
          let pos_parcial = String(localdb[i]["location"]);
          let pos_parcial_split = pos_parcial.split(",");
          let pos_marker: LatLng = new LatLng(parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));


          let marker: MarkerOptions = {
            position: pos_marker,
            //title: String(localdb[i]["description"]),
            animation: GoogleMapsAnimation.DROP,
          };
          this.map.addMarker(marker).then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(res => {
              this.navCtrl.push(SpotinfoPage,{
                info: localdb[i]['id'],
                user: this.user_info,
                country: this.country
              });
            })
          });
        }
      }
    });





  }

  ionViewDidLoad(){
    this.user_info = this.navParams.get('datos');

    this.obtenerPosicion();



  }

  obtenerPosicion():any{
    //this.geolocation.watchPosition().subscribe().then
    this.geolocation.getCurrentPosition().then( response => {
      this.loadMap(response);
    })
      .catch(error => {
        console.log(error);
      })
  }



  loadMap(positiona: Geoposition){
    let latitude = positiona.coords.latitude;
    let longitud = positiona.coords.longitude;
    console.log(latitude,longitud);

    //CREA UN MAPA PASANDO UN ELEMENTO HTML:D

    let element: HTMLElement = document.getElementById('map');

    let map: GoogleMap = this.googleMaps.create(element);
    this.map = map;

    //CREAT LATITUDE OBJECT

    let myPosition: LatLng = new LatLng(latitude, longitud);

    let pos1: LatLng = new LatLng(-33,-74);

    // CAMERA POSITION

    let position: CameraPosition<LatLng> = {
      target: myPosition,
      zoom: 18,
      tilt: 60,
    };

    map.one(GoogleMapsEvent.MAP_READY).then(()=> {

      console.log('MAP RUDY');

      //REFRESH SELF POSITION TRY
      this.map.setMyLocationEnabled(true);



      //camera to pos
      map.moveCamera(position);
      //new marker
      //NUEVO EVENTO PRUEBAS:



    });


}




}

