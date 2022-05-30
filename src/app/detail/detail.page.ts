import { Component, OnInit } from '@angular/core';
// import { ModalController, Platform } from '@ionic/angular';

declare var opneUrlPage: any;

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  constructor(
    // private modalCtrl: ModalController,
    // public platform: Platform, 
    // private iab: InAppBrowser
  ) { }

  ngOnInit() {

    
  }

  open() {
    opneUrlPage();
  }

  // openUrl(url: string) {
  //   // this.platform.ready().then(() => {
  //   //   const browser = this.iab.create(url, '_system');
  //   //   browser.show();
  //   // });
  //   window.open(url, '_system', 'location=yes')
  // }
}
