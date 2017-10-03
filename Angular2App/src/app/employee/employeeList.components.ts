import { Component } from '@angular/core';
@Component({
    selector:'list-employee',
    templateUrl:'app/employee/employeeList.components.html',
    styleUrls: ['app/employee/employeeList.components.css']
})
export class EmployeeListComponent{
    employees:any[];
    constructor(){
        this.employees=[
            {code:'emp01',name:'tom',gender:'male',anualSalary:5500,dateOfBirth:'20-may-1992' },
            {code:'emp02',name:'ajay',gender:'male',anualSalary:32000,dateOfBirth:'20-may-1992'},
            {code:'emp03',name:'Lovely',gender:'female',anualSalary:5500,dateOfBirth:'31-dec-1992'},
            {code:'emp04',name:'Shreya',gender:'female',anualSalary:64533,dateOfBirth:'12-sep-1988'}
        ];
    }
    
    getEmployees():void {
        this.employees=[
            {code:'emp01',name:'tom',gender:'male',anualSalary:5500,dateOfBirth:'20-may-1992' },
            {code:'emp02',name:'ajay',gender:'male',anualSalary:32000,dateOfBirth:'20-may-1992'},
            {code:'emp03',name:'Lovely',gender:'female',anualSalary:5500,dateOfBirth:'31-dec-1992'},
            {code:'emp04',name:'Shreya',gender:'female',anualSalary:64533,dateOfBirth:'12-sep-1988'},
            {code:'emp05',name:'NewAdded',gender:'female',anualSalary:99999,dateOfBirth:'19-sep-1999'}
        ];
    }

    trackByEmpCode(index:number , employee:any):string{
        return employee.code;
    }
}