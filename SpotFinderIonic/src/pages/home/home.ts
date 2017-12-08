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



declare var google;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
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
              public db: AngularFireDatabase) {


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
    this.navCtrl.push(SportlistPage);
    this.events.subscribe('sport', sport => {
      if(this.country != "null"){
        this.marker(sport);
        this.events.unsubscribe('sport');
        
      }
      else {
        alert("Please, set county");
        this.events.unsubscribe("sport");
      }
    });

  }

  goto_country(){

    this.navCtrl.push(SetlocationPage);
    this.events.subscribe('country', country => {
      this.country = country;
      alert(this.country);
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



    let pos2: LatLng = new LatLng(-33,-75);
    let mk: MarkerOptions = {
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

    let localdb = [];
    this.db.database.ref('chile-prueba').once('value',
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
            title: String(localdb[i]["description"]),
            animation: GoogleMapsAnimation.DROP
          };
          this.map.addMarker(marker);
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



  }

  ionViewDidLoad(){
    this.obtenerPosicion();

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
      let markerOptions: MarkerOptions = {
        position: myPosition,
        title: 'U here' + myPosition.lat + myPosition.lng
      };

      map.addMarker(markerOptions);
      //NUEVO EVENTO PRUEBAS:



    });


}




}

