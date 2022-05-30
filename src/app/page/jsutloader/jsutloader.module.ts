import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JsutloaderPageRoutingModule } from './jsutloader-routing.module';

import { JsutloaderPage } from './jsutloader.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JsutloaderPageRoutingModule
  ],
  declarations: [JsutloaderPage]
})
export class JsutloaderPageModule {}
