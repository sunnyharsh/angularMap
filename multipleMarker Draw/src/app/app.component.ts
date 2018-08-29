import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  lat:Number;
  lng:Number;
  zoom:Number
  constructor(){
    this.lat=23.361525;
    this.lng=85.3471233333333;
    this.zoom=4;
  }
}
