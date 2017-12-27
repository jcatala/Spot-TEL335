import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SpotinfoPage } from './spotinfo';

@NgModule({
  declarations: [
    SpotinfoPage,
  ],
  imports: [
    IonicPageModule.forChild(SpotinfoPage),
  ],
})
export class SpotinfoPageModule {}
