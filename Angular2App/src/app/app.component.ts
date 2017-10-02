import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`Name : <input [(ngModel)]='name'/>
  <br/>
  You entered :{{name}}`
})
export class AppComponent {
 name : string = 'Tom';
}
