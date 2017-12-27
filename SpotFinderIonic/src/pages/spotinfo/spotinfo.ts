import { Component } from '@angular/core';
import {IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';

import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {FirebaseListObservable} from "angularfire2/database-deprecated";
import {AlertController} from "ionic-angular";
import * as firebase from "firebase";


/**
 * Generated class for the SpotinfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-spotinfo',
  templateUrl: 'spotinfo.html',
})
export class SpotinfoPage {

  tittle: any;
  likes: any;
  dislikes: any;
  author: any;
  country: any;
  id: any;
  user: any;
  description: any;
  imgsource: any;


  dislikedado = 0;
  likedado = 0;

  tasks: AngularFireList<any>;



  constructor(public navCtrl: NavController, public navParams: NavParams,
              private db: AngularFireDatabase,
              public alertCtrl: AlertController,
              public loadingCtrl: LoadingController) {
  }


  presentLoadingDefault(){
    let loading = this.loadingCtrl.create({
      // content: 'Please wait... working !',
      content:`
      <div class="custom-spinner-container">
      <p>Loading content... please wait</p>
        <div class="custom-spinner-box"></div>
      </div>`,
    });
    loading.present();
    setTimeout(()=>{
      loading.dismiss();
    },2000);
  }




  ionViewDidLoad() {
    console.log('ionViewDidLoad SpotinfoPage');
    console.log(this.navParams.get('info'));
    console.log(this.navParams.get('user'));

    this.id = this.navParams.get('info');
    this.country = this.navParams.get('country').toLowerCase();
    this.user = this.navParams.get('user');


    this.db.database.ref('/' + this.country + '/' + this.id)
      .once('value', (snapshot) => {
        console.log(snapshot.val());

        this.likes = snapshot.val()['likes'];
        this.dislikes = snapshot.val()['dislikes'];
        this.description = snapshot.val()['description'];
        this.author = snapshot.val()['author'];

      });


    //ASIGNACION DE VALORES
    try {
      firebase.storage().ref().child('/images/' + this.id + '.jpg')
        .getDownloadURL().then(url => {
        this.imgsource = url;
      })
      this.presentLoadingDefault();
    }
    catch (err){
      console.log(err);
    }


  }


  darLike(){
    if(this.likedado == 0){
      this.db.database.ref('/' + this.country + '/' + this.id)
        .once('value', (snapshot) => {
          let val = snapshot.val();
          this.likes = parseFloat(val['likes']) + 1;
          this.likedado = 1;
          snapshot.ref.update({
            likes: this.likes
          }, err => {
            console.log(err)
          })
        })
    }
    else{

      let alert = this.alertCtrl.create({
        title: "Already done !",
        message: "One like per 'day' !",
        buttons: ['OK']
      });
      alert.present();

    }
  }


  darDislikes(){
    if(this.dislikedado == 0) {
      this.db.database.ref('/' + this.country + '/' + this.id)
        .once('value', (snapshot) => {
          let val = snapshot.val();
          this.dislikes = parseFloat(val['dislikes']) + 1;
          this.dislikedado = 1;
          snapshot.ref.update({
            dislikes: this.dislikes
          },err =>{
            console.log(err);
          })
        })
    }
    else{
      let alert = this.alertCtrl.create({
        title: "Already done !",
        message: "One like per 'day' !",
        buttons: ['OK']
      });
      alert.present()
    }

  }



}

