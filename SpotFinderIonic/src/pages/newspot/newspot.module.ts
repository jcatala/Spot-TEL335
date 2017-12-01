import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewspotPage } from './newspot';

@NgModule({
  declarations: [
    NewspotPage,
  ],
  imports: [
    IonicPageModule.forChild(NewspotPage),
  ],
})
export class NewspotPageModule {}
