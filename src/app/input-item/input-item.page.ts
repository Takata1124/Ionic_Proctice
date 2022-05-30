import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

declare var selectText: any;

@Component({
  selector: 'app-input-item',
  templateUrl: './input-item.page.html',
  styleUrls: ['./input-item.page.scss'],
})
export class InputItemPage implements OnInit {

  values = '';
  eventSource = [];
  viewTitle;

  calendar = {
    mode: 'month',
    currentDate: new Date(),
  };

  selectedDate = ''
  selectedMonth = ''

  constructor(
    private modalCtrl: ModalController,
  ) { }

  ngOnInit() {
  }

  close() {
    var dismissItem = [this.values, this.selectedDate];
    this.modalCtrl.dismiss(dismissItem);
  }

  select() {
    selectText()
  }

  onEnter(value: string) { 
    this.values = value; 
  }

  onViewTitleChanged(title) {
    this.viewTitle = title;
  }

  onEventSelected(event) {
    console.log('Event selected:' + event.startTime + '-' + event.endTime + ',' + event.title);
  }

  onTimeSelected(ev) {
    var originalDate =  ev.selectedTime.toLocaleString();
    this.selectedMonth = originalDate.substr( 0, 7 );
    this.selectedDate = originalDate.substr( 0, 10 );
  }

  onCurrentDateChanged(event: Date) {
    console.log('current date change: ' + event);
  }

  onRangeChanged(ev) {
    console.log('range changed: startTime: ' + ev.startTime + ', endTime: ' + ev.endTime);
  }

  today() {
    this.calendar.currentDate = new Date();
  }
}
