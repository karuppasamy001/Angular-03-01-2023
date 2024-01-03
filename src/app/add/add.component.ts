import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';
import { Employee } from '../interface';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss'],
})
export class AddComponent {
  id!: number;
  name!: string;
  city!: string;
  maritalStatus!: boolean;
  gender!: string;
  annualIncome!: number;
  dateofbirth!: Date;
  output: string = ""

  constructor(public employeeDetails: EmployeeDetailsService) {
    console.log(employeeDetails.EmployeeDetails);
  }

  addEmployee() {

    if (this.employeeDetails.EmployeeDetails[this.id]) {
      alert('Id Already Exists');
      return;
    }

    if (this.annualIncome < 0 || this.id < 0) {
      alert(' Id and Income Cannot be negative');
      return;
    }

    if(this.id === undefined){
      alert("Please enter the id")
      return;
    }

    if (this.name === undefined) {
      alert('Please enter the name');
      return;
    }
    if (this.city === undefined) {
      alert('Please select the city');
      return;
    }

    if (this.maritalStatus === undefined) {
      alert('Please Select the Marital Status');
      return;
    }

    if (this.gender === undefined) {
      alert('Please select the gender');
      return;
    }

    if (this.annualIncome === undefined) {
      alert('Please enter the Annual Income');
      return;
    }

    

    

    const newEmp: Employee = {
      id: this.id,
      name: this.name,
      city: this.city,
      maritalStatus: Boolean(this.maritalStatus),
      gender: this.gender,
      annualIncome: this.annualIncome,
      dateOfBirth: this.dateofbirth
    };

    this.employeeDetails.EmployeeDetails[this.id] = newEmp;
    console.log('Employee added ', this.employeeDetails.EmployeeDetails);
    this.output = "Employee Added Successfully"
  } 
}
