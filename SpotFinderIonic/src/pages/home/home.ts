import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import 'rxjs/add/operator/map';

import { Geolocation, Geoposition} from "@ionic-native/geolocation";
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapsEvent,
  LatLng,
  CameraPosition,
  MarkerOptions,
  Marker
} from "@ionic-native/google-maps";
import { Http} from "@angular/http";
import { Storage } from "@ionic/storage";
import { Firebase} from "@ionic-native/firebase";

import {isUndefined} from "ionic-angular/util/util";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  information: any[];
  maindata: any[];

  public items: Array<any> = [];


  map: GoogleMap;

  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              private http: Http,
              private storage: Storage) {
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });


    let localbd = this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json')
      .map(res => res.json().items);
    localbd.subscribe(data => {
      this.maindata = data;
    });


  }

  //FIREBASE API


  //




  toggleSection(i){
    this.information[i].open = !this.information[i].open;
  }
  toggleItem(i,j) {
    this.information[i].children[j].open = !this.information[i].childen[j].open;

  }

  getJson(){
    return this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json').map( res => res.json());
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


    console.log(   );
    for(let i = 0; i < this.items.length; i++){
      let sport = String(this.items[i][0]);
      if (sport == what){
        let pos_parcial = String(this.items[i][String(what)]);
        let pos_parcial_split = pos_parcial.split(",");
        let pos_marker: LatLng = new LatLng(parseFloat(pos_parcial_split[0]), parseFloat(pos_parcial_split[1]));
        let marker: MarkerOptions = {
          position: pos_marker,
          title: String(this.items[i][3])
        };
        this.map.addMarker(marker);
      }
    }
    
  }

  ionViewDidLoad(){
    this.obtenerPosicion();

    //SACA DATOS DE GITHUB, OJO QUE DEBE CAMBIAR CON LA LOCACIÓN PENDIENTE!

    this.http.get('https://raw.githubusercontent.com/jcatala/Spot-TEL335/master/locations/chile/valparaiso.json')
      .map(res => res.json()).subscribe(data => {
      this.items.push(data);
      console.log("data: ", data, "items:", this.items[0]['bmx'], "maindata:");
    });

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
      tilt: 30
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

      let mo: MarkerOptions = {
        position: pos1,
        title: 'VInAYHUEA'
      }

      map.addMarker(markerOptions);
      map.addMarker(mo);
    });

}




}

