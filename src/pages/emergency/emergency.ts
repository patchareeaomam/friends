import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the EmergencyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-emergency',
  templateUrl: 'emergency.html',
})
export class EmergencyPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allemergency = [
  {
    id:1,
    name:"ตำรวจ",
    phone:"191",
  },
  {
    id:2,
    name:"มูลนิธิป่อเต็กตึ๊ง",
    phone:"1418",
  },
  {
    id:3,
    name:"แจ้งเหตุไฟไหม้",
    phone:"199",
  },
  {
    id:4,
    name:"เจ็บป่วยฉุกเฉิน",
    phone:"1669",
  },
  {
    id:5,
    name:"หน่วยแพทย์กู้ชีวิต วชิรพยาบาล",
    phone:"1554",
  },
  ];
}
