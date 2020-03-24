import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the FriendsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  allfriends = [
    {
      id:1,
      name:"Patcharee Manmungyont",
      email:"patchareeaomam1211@gmail.com",
      phone:"0621536364",
      image:"assets/imgs/01.jpg",
    },
    {
      id:2,
      name:"Sureeporn Manmungyont",
      email:"sureeporn1@gmail.com",
      phone:"0611111111",
      image:"assets/imgs/02.jpg",
    },
    {
    id:3,
    name:"Thachchai Manmungyont",
    email:"thachchaitop@gmail.com",
    phone:"0622222222",
    image:"assets/imgs/03.jpg",
  },
  {
    id:4,
    name:"Phatarapon Manmungyont",
    email:"phatarapon22@gmail.com",
    phone:"0633333333",
    image:"assets/imgs/04.jpg",
  },
  {
    id:5,
    name:"Phakkapon Manmungyont",
    email:"phakkapon12@gmail.com",
    phone:"0655555555",
    image:"assets/imgs/05.jpg",
  },
  ];
 
}
