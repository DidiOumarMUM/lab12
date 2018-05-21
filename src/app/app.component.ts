import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lab 13';
  Items : string[] = ["Iphone" ,"Ipad" , "playstation" , "Axe" ] ;

  showColor(color :string)
  {
  console.log(color) ;
  }
}
