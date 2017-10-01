import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template:`<div>
                <h1>{{'Page header = '+pageHeader}}</h1>
                <img src={{imagePath}}/>
                <h4>{{getFullName()}}</h4>
                <my-employee></my-employee>
                <button [disabled]='isDisabled'>Click Me</button>
                <button bind-disabled='isDisabled'>Click Me Canonical</button>
            </div>`
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
