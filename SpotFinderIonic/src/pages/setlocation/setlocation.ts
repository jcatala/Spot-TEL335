import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public events: Events,
              public loadingCtrl: LoadingController) {
    this.initializeItems();

  }

  presentLoadingDefault(){
    let loading = this.loadingCtrl.create({
      // content: 'Please wait... working !',
      content:`
      <div class="custom-spinner-container">
        <p>Making changes, please wait...</p>
        <div class="custom-spinner-box"></div>
      </div>`,
    });
    loading.present();
    setTimeout(()=>{
      loading.dismiss();
    },2500);
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
    this.presentLoadingDefault();
    this.navCtrl.pop();
  }

}
