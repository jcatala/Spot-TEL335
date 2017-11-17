import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportListPage } from './sport-list';
import { NavController } from "ionic-angular";
import {HomePage} from "../home/home";


@NgModule({
  declarations: [
    SportListPage,
  ],
  imports: [
    IonicPageModule.forChild(SportListPage)
  ],
})
export class SportListPageModule {
  constructor(public navCtrl: NavController,
  ){

  }



}
