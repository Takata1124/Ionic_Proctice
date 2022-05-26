import { Component } from '@angular/core';
import { NavController, ModalController } from '@ionic/angular';
import { InputItemPage } from '../input-item/input-item.page';
import { Storage } from '@ionic/storage';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page {

  returnedData: any;
  public items = [];

  private _storage: Storage | null = null;

  constructor(
    public navCtrl: NavController,
    private modalCtrl: ModalController,
    private storage: Storage,
  ) {
    this.init();
  }

  async init() {
    console.log('読み込み');
    const storage = await this.storage.create();
    this._storage = storage;
    this._storage.get('items').then((items) => {
        this.items = items ? items : [];
      });
  }

  async presentModal() {
    const modal = await this.modalCtrl.create({
      component: InputItemPage,
    });

    modal.onDidDismiss().then((returnedData) => {
      if (returnedData.data !== '') {
        console.log(returnedData.data)
        this.items.push({ title: returnedData.data, isChecked: false })
        this.updateStorageData();
      }
    });

    return await modal.present();
  }

  deleteItem(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    this.updateStorageData();
  }

  updateStorageData() {
    this.storage.set('items', this.items).then(() => {
    });
  }

  updateCucumber(item) {
    // console.log('Cucumbers new state:' + item.isChecked);
    // console.log(item.title)
    // console.log(this.items)
    // const index = this.items.findIndex(({title}) => title === item.title); 
    // console.log(index)
    this.updateStorageData();
  }
}