import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { AgmJsMarkerClustererModule } from '@agm/js-marker-clusterer';
import { AgmDirectionModule } from 'agm-direction'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBMs37XVWpijVXhWr4MyWaIGaD702AEv2g',
      libraries: ["places"]
    }),
    AgmDirectionModule,
    AgmJsMarkerClustererModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
