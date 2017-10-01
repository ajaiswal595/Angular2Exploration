import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button class="colorClass" [class]='classesToApply'>My Button</button>
  <br/><br/>
  <button class="colorClass" [class.boldClass]='applyBoldClass'>My Button</button>
  <button class="colorClass" [class.boldClass]='!applyBoldClass'>Negation condition Button</button>
  <br/>
  <br/>
  <button class="colorClass" [ngClass]='addClasses()'>NgClass  Button</button>`
  //templateUrl: 'app/app.component.html',
})
export class AppComponent {
  classesToApply: string = 'italicClass boldClass';
  applyBoldClass : boolean = true;
  applyItalicClass : boolean = true;

  addClasses(){
    let classes = {
        boldClass : this.applyBoldClass,
        italicClass:this.applyItalicClass
    };
    return classes;
  }
}
