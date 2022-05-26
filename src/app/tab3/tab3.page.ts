import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {  NavController, LoadingController, IonItem } from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  items:{
    title: string,
    content: string,
    pubDate: string,
    link: string,
    guide: string
  }[]=[];

  constructor(
    public navCtrl: NavController,
    public http: HttpClient,
    public loadingCtrl: LoadingController
  ) { 
    this.init();
  }

  async init() {
    // console.log('読み込みchuudesu');
    const loader = this.loadingCtrl.create({
      // content: "Please wait...",
      duration: 1000
    });
    // loader.present();

    const jsonURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fhl%3Dja%26ned%3Dus%26ie%3DUTF-8%26oe%3DUTF-8%26output%3Drss"

    console.log(jsonURL);
    this.http
      .get(jsonURL)
      .subscribe(data => {
      // console.log(data);
			// console.log(data[0]['title']);
        this.items = data['items'];
        console.log(this.items[0].title)
        console.log(this.items.length)
        // console.log(this.items[0].title);
        // loader.dismiss();
    })
  }
}
