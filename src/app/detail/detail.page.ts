import { Component, OnInit } from '@angular/core';
import { ModalController, Platform } from '@ionic/angular';

// import {
//   InAppBrowser
// } from '@awesome-cordova-plugins/in-app-browser/ngx';
// import { url } from 'inspector';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public platform: Platform, 
    // private iab: InAppBrowser
  ) { }

  ngOnInit() {

    // const browser = this.iab.create('https://ionic.io','_self',{location:'no'});
    // this.openUrl('https://codenote.net/mobile-app-framework/4072.html');
  }

  // openUrl(url: string) {
  //   // this.platform.ready().then(() => {
  //   //   const browser = this.iab.create(url, '_system');
  //   //   browser.show();
  //   // });
  //   window.open(url, '_system', 'location=yes')
  // }

  close() {
    this.modalCtrl.dismiss();
  }

}
