import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { FriendsPage } from '../friends/friends';
import { EmergencyPage } from '../emergency/emergency';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

}
goToFriends(){
  this.navCtrl.push(FriendsPage);
}
goToEmergency(){
  this.navCtrl.push(EmergencyPage);
  }
}

