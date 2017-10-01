import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<my-employee></my-employee>`
})
export class AppComponent {
 onClick():void{
   console.log('ButtonClicked');
 }
}
