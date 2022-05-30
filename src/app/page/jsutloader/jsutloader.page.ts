import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-jsutloader',
  templateUrl: './jsutloader.page.html',
  styleUrls: ['./jsutloader.page.scss'],
})
export class JsutloaderPage implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.router.navigate(['loader']);
  }
}
