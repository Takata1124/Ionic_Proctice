import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

declare var openUrlPage: any;

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  openMenu() {
    // openUrlPage();
    console.log("hello")
    this.router.navigate(['../tab1/tab1.module']);
  }

}
