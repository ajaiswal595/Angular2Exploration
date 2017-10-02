import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`Name : <input [value]='name' (input)='name=$event.target.value'/>
  <br/>
  You entered :{{name}}`
})
export class AppComponent {
 name : string = 'Tom';
}
