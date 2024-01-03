import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-search-by-marital-status',
  templateUrl: './search-by-marital-status.component.html',
  styleUrls: ['./search-by-marital-status.component.scss']
})
export class SearchByMaritalStatusComponent {
  constructor(public empDetails: EmployeeDetailsService){
    this.empDetails.employeeArray = []
  }
  
  marital!: string

  searchByMaritalStatus(maritalStatus: string){
    this.empDetails.employeeArray = []
    for(let i in this.empDetails.EmployeeDetails){
      if(this.empDetails.EmployeeDetails[i].maritalStatus === Boolean(maritalStatus)){
        this.empDetails.employeeArray.push(this.empDetails.EmployeeDetails[i])
      }
    }
  }
}
