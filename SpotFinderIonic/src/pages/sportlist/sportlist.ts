import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from "ionic-angular";


/**
 * Generated class for the SportlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sportlist',
  templateUrl: 'sportlist.html',
})
export class SportlistPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportlistPage');
  }

  submit(what){
    this.events.publish('sport',what);
    this.navCtrl.pop();

  }
}
