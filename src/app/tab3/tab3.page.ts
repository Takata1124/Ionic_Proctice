import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { NavController, LoadingController, IonItem,  ModalController} from '@ionic/angular';
import { DetailPage } from '../detail/detail.page';


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

  public xmlItems : any;

  constructor(
    public navCtrl: NavController,
    private http: HttpClient,
    public loadingCtrl: LoadingController,
    private modalCtrl: ModalController
  ) { 
    this.init();
  }

  async init() {
    // console.log('読み込みchuudesu');
    
  }

  doRefresh(event) {
    // console.log('Begin async operation');
    this.reloadItem();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.target.complete();
    }, 2000);
  }

  onTouchFunction(item) {
    console.log("tap");
  }

  touchStart($event, i) {
    // console.log($event);
    console.log(i.link);
    console.log(i.title);
    console.log(i.pubDate);
    this.presentModal();
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: DetailPage,
    });

    // modal.onDidDismiss().then((returnedData) => {
    //   if (returnedData.data[0] !== '') {
    //     console.log(returnedData.data)
    //     this.items.push({ title: returnedData.data[0], date: returnedData.data[1] ,isChecked: false })
    //     this.updateStorageData();
    //   }
    //   // console.log(returnedData)
    //   // console.log(returnedData.data[0])
    //   // console.log(returnedData.data[1])
    // });

    return await modal.present();
  }

  reloadItem() {

    // const loader = this.loadingCtrl.create({
    //   // content: "Please wait...",
    //   duration: 1000
    // });
    // loader.present();

    const jsonURL = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fnews.google.com%2Fnews%3Fhl%3Dja%26ned%3Dus%26ie%3DUTF-8%26oe%3DUTF-8%26output%3Drss"

    // console.log(jsonURL);
    this.http
      .get(jsonURL)
      .subscribe(data => {
        this.items = data['items'];
        // console.log(this.items[0].title)
        // console.log(this.items.length)
    })
  }
}
