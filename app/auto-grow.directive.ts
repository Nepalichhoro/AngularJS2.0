import {Directive, ElementRef, Renderer} from 'angular2/core';

// Calling directive function
@Directive ({
  selector: '[autoGrow]',
  host: {
      '(focus)': 'onFocus()',
      '(blur)': 'onBlur()'

  }

})

export class AutoGrowDirective {

    constructor(private el: ElementRef, private renderer: Renderer){
    }
     onFocus(){
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '400');
     };

     onBlur(){
      this.renderer.setElementStyle(this.el.nativeElement, 'width', '80');
     };
}
