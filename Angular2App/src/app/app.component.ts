import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button (click)='onClick()'>My onClick event</button>
  <br/><button on-click='onClick()'>canonicle binding</button>`
})
export class AppComponent {
 onClick():void{
   console.log('ButtonClicked');
 }
}
