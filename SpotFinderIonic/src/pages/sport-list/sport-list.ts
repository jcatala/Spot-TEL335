import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { HomePage } from "../home/home";

/**
 * Generated class for the SportListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-sport-list',
  templateUrl: 'sport-list.html',
})
export class SportListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private home:HomePage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SportListPage');
  }


}
