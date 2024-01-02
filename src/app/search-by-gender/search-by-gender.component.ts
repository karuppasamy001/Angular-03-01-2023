import { Component } from '@angular/core';
import { Employee } from '../interface';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-search-by-gender',
  templateUrl: './search-by-gender.component.html',
  styleUrls: ['./search-by-gender.component.scss']
})
export class SearchByGenderComponent {
  gender!: string

  constructor(public empDetails: EmployeeDetailsService){
    this.empDetails.employeeArray = []
  }
  
  searchByGender(gender: string){
    this.empDetails.employeeArray = []
    for(let i in this.empDetails.EmployeeDetails){
      if(this.empDetails.EmployeeDetails[i].gender === gender){
        this.empDetails.employeeArray.push(this.empDetails.EmployeeDetails[i])
      }
    }
  }
}
