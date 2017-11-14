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
import {Http} from "@angular/http";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  information: any[];
  map: GoogleMap;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              private http: Http){
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });
  }

  toggleSection(i){
    this.information[i].open = !this.information[i].open;
  }
  toggleItem(i,j) {
    this.information[i].children[j].open = !this.information[i].childen[j].open;

  }

  marker(){
    let pos2: LatLng = new LatLng(-33,-75);
    let mk: MarkerOptions = {
      position: pos2,
      title: "probando12"
    };

    this.map.addMarker(mk);
  }

  ionViewDidLoad(){
    this.obtenerPosicion();

  }

  obtenerPosicion():any{
    this.geolocation.getCurrentPosition().then(response => {
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

