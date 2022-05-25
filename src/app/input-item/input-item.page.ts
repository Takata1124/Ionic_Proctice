import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.page.html',
  styleUrls: ['./input-item.page.scss'],
})
export class InputItemPage implements OnInit {

  constructor(
    private modalCtrl: ModalController,
  ) { }

  values = '';

  ngOnInit() {
  }

  close() {
    this.modalCtrl.dismiss(this.values);
    
  }

  onEnter(value: string) { 
    this.values = value; 
  }
}
