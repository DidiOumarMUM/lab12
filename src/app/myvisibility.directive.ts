import { Directive , Input , ElementRef , Renderer , OnInit} from '@angular/core';

@Directive({
  selector: '[Myvisibility]'
})
export class MyvisibilityDirective implements OnInit {

  @Input('Myvisibility') visibility : boolean ;
  
  constructor(private element: ElementRef) {
  
  }
  ngOnInit() {
    if (!this.visibility) {
      this.element.nativeElement.style.display = 'none';
    }
  }
}
