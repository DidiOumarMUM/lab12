import { Directive ,EventEmitter, ElementRef , OnInit , Renderer2 , HostBinding ,HostListener , Output} from '@angular/core';

@Directive({
  selector: '[Mycolor]'
})
export class MycolorDirective  implements OnInit {

  @HostBinding('style.color') 
  private color: string; 
  private colors : string[] ;
  
  @Output() private ColorChange: EventEmitter<string>;

  constructor(private el: ElementRef,  private renderer: Renderer2) {
    this.colors = ["red" , "black" , "blue" , "yellow"] ;
    this.ColorChange = new EventEmitter();
    
}

ngOnInit() {
  this.ColorChange.emit(this.color);
}

@HostListener('click')
  onClick(){
    this.color = this.colors[Math.floor(Math.random() * this.colors.length)];
    this.ColorChange.emit(this.color) ;
    this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
    
  }

}
