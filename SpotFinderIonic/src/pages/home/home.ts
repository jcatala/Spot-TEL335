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

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  information: any[];
  maindata: any;

  public items: Array<any> = [];


  map: GoogleMap;
  constructor(public navCtrl: NavController,
              public geolocation: Geolocation,
              public googleMaps: GoogleMaps,
              private http: Http,
              private storage: Storage,
              private firebase: Firebase){
    let localData = this.http.get('assets/information.json').map(res => res.json().items);
    localData.subscribe(data => {
      this.information = data;
    });
    this.maindata = null;
    this.maindata = this.http.get('http://spottel335.firebaseio.com/.json').map(res => res.json()).subscribe(data => {
      this.maindata = data.data.children;
      console.log(this.maindata);
    });

    this.firebase.getToken().then(token => console.log('token is ${token}'))
      .catch(error => console.error('error getting token', error));

    this.firebase.onTokenRefresh().subscribe((token: string) => console.log('Got new token ${token}'));
    
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
    return this.http.get('https://spottel335.firebaseio.com/.json').map( res => res.json());
  }

  marker(){
    let pos2: LatLng = new LatLng(-33,-75);
    let mk: MarkerOptions = {
      position: pos2,
      title: "probando12"
    };

    this.map.addMarker(mk);
    console.log(this.storage.get('maindata'));
 /*   let latitude = total[0];
    let longitude = total[1];
    let pos3: LatLng = new LatLng(latitude, longitude);
    let mk2: MarkerOptions = {
      position: pos3,
      title: 'probando jotason'
    };
    this.map.addMarker(mk2);
*/
  }

  ionViewDidLoad(){
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

