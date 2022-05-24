import { Component } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  constructor() {}
  name = 'world';

  public cnt: number = 0;

  onNice() {
    console.log('hello');
  }


  add() {
    this.cnt++;
  }

  reduce() {
    this.cnt--;
  }

  init() {
    this.cnt = 0;
  }
}
