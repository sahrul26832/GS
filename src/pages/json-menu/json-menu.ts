import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, } from 'ionic-angular';

/**
 * Generated class for the JsonMenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-json-menu',
  templateUrl: 'json-menu.html',
})
export class JsonMenuPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad JsonMenuPage');
  }
  choie(_choie_) {
    if (_choie_ == 1) {
      this.navCtrl.push("SimpleJsonPage");
    } else if (_choie_ == 2) {
      alert("No!! Not choie");
    } else if (_choie_ == 3) {
      this.navCtrl.push("PostJsonPage");
    }
  }

}
