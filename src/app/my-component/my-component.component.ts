import { Component, OnInit  , Input} from '@angular/core';

@Component({
  selector: 'my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  constructor() { }
   @Input("items") items : string [] ;
  ngOnInit() {
  }

}
