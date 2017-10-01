import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button class="colorClass" [class]='classesToApply'>My Button</button>`
  //templateUrl: 'app/app.component.html',
})
export class AppComponent {
  classesToApply: string = 'italicClass boldClass';
}
