import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
<<<<<<< HEAD
import { PassingserviceService } from './passingservice.service';
=======
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Component } from '@angular/core';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx'

>>>>>>> 13454c1fb7ce78f1c472f7c3809ad894cfcdc227

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
<<<<<<< HEAD
  providers: [HTTP, HttpClient,PassingserviceService,{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
=======
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, HTTP, HttpClient, Component, LocalNotifications],
>>>>>>> 13454c1fb7ce78f1c472f7c3809ad894cfcdc227
  bootstrap: [AppComponent],
})
export class AppModule {}
