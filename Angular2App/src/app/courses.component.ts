import { Component } from '@angular/core';
import { CoursesService } from './courses.service';
@Component({
    selector:'courses',//<courses>
    template:`
    <h2>{{getTitle()}}</h2>
    <ul>
        <li *ngFor="let course of courses">{{course}}</li>
    </ul>
    <button class="btn btn-primary" [class.active]="isActive" (click)="onSave($event)">save class binding</button>
    <button [style.backgroundColor]="isActive?'blue':'white'">save style binding</button>
    <input (keyup.enter)="onKeyUp()"/>
    Template variable <input #email (keyup.enter)="passEmailValue(email.value)"/>
    PrpertyBinding <input [value]="email" (keyup.enter)="passEmailProperty()"/>
    Two way Binding <input [(ngModel)]="emailModel" (keyup.enter)="passEmailPropertyTwoWay()"/>

    {{course.title |uppercase}}<br/>
    {{course.students | number}}<br/>
    {{course.rating |number:'5.1-1'}}<br/>
    {{course.price | currency :'Rup':true:'3.2-2'}}<br/>
    {{course.releaseDate | date:'shortDate'}}<br/>

    custom pipe {{text | summary :10}}
    `
})
export class CoursesComponent {

text =` hello anguluar js you are so confusing in versioning why did you that please tell the people so they can understand `

    title = "List of courses...";
    isActive=true;  //css class binding 
    email = "ajaiswal595@gmail.com";
    emailModel="ajay.rgpv2012@gmail.com";

    course ={
        title:"The Complete Angular Course",
        rating: 4.9745,
        students:30123,
        price:190.95,
        releaseDate:new Date(2016,3,1)
    }

    passEmailProperty(){
        console.log("passEmailProperty",this.email);
    }
    passEmailPropertyTwoWay(){
        console.log("passEmailProperty",this.emailModel);
    }
    getTitle(){
        return this.title;
    }

    onKeyUp(){
        console.log("Enter was pressed");
    }

    passEmailValue(email){
        console.log(email);
    }


    // onKeyUp($event){
    //   if($event.keyCode===13)  console.log("Enter was pressed");
    // }

    onSave($event){
        console.log("on save clicked");
        console.log($event);
    }

    courses; //= ["course1","course2","course3"];
//angular understand and it tried to create an instance of CourseService which is singlton 
    constructor(service:CoursesService){
        //this.courses = new CoursesService();  tight coupling
        this.courses = service.getCourses();
    }
}