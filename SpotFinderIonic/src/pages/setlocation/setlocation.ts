import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Events } from "ionic-angular";

/**
 * Generated class for the SetlocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setlocation',
  templateUrl: 'setlocation.html',
})
export class SetlocationPage {

  searchQuery: string = '';
  items: string[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events) {
    this.initializeItems();

  }

  initializeItems(){
    this.items = [
      "Chile"
    ];
  }

  getItem(ev: any){
    this.initializeItems();

    let val = ev.target.value;

    if(val && val.trim() != ''){
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SetlocationPage');
  }

  submit(what){
    this.events.publish('country',what);
    this.navCtrl.pop();
  }

}
