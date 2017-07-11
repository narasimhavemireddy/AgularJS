import { Component } from '@angular/core'


@Component({

    selector: 'my-employee',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})
export class EmployeeComponent {

    firstName: string = 'Tom';
    lastName: string = 'Jonny';
    salary: number = 10000;
}