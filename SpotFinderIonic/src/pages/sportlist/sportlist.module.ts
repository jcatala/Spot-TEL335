import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SportlistPage } from './sportlist';

@NgModule({
  declarations: [
    SportlistPage,
  ],
  imports: [
    IonicPageModule.forChild(SportlistPage),
  ],
})
export class SportlistPageModule {}
