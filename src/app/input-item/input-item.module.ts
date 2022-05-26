import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InputItemPageRoutingModule } from './input-item-routing.module';

import { InputItemPage } from './input-item.page';

import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InputItemPageRoutingModule,
    NgCalendarModule
  ],
  declarations: [InputItemPage]
})
export class InputItemPageModule {}
