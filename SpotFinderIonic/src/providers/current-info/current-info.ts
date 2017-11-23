import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CurrentInfoProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CurrentInfoProvider {
  location: any;
  sport: any;
  constructor() {
    console.log('Hello CurrentInfoProvider Provider');
  }
  setSport(what){
    this.sport = what;
  }
  setLocation(what){
    this.location = what;
  }

}
