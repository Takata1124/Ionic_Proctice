import { Component } from '@angular/core';

// declare var ChangeItem: any;
declare var openUrlPage: any;

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {}

  getPicture() {
    openUrlPage();
    // ChangeItem();
  }
}
