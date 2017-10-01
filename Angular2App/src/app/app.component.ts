import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<button class="colorClass">My Button</button>`
  //templateUrl: 'app/app.component.html',
})
export class AppComponent {
  //name : string = 'Angular 2!';
  pageHeader: string ="Employee Details";
  imagePath: string ="https://avatars2.githubusercontent.com/u/8745632?v=4&s=460";
  isDisabled : boolean=false;
  firstName : string ='Ajay';
  lastName : string = 'Jaiswal';

  getFullName():string{
    return this.firstName+" "+this.lastName
  }
}
