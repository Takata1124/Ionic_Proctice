import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JsutloaderPage } from './jsutloader.page';

const routes: Routes = [
  {
    path: '',
    component: JsutloaderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JsutloaderPageRoutingModule {}
