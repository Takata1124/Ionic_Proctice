import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage-angular';

import { NgCalendarModule  } from 'ionic2-calendar';
import { HttpClientModule } from '@angular/common/http';

// import { InAppBrowser } from '@ionic-native/in-app-browser';

import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    IonicStorageModule.forRoot(), 
    NgCalendarModule,
    HttpClientModule,
    // InAppBrowser
    // SQLite,
  ],
  providers: [{ 
    provide: RouteReuseStrategy, 
    useClass: IonicRouteStrategy,
    // Camera
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
