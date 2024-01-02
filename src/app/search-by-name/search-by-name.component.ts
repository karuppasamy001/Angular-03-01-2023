import { Component } from '@angular/core';
import { Employee } from '../interface';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-search-by-name',
  templateUrl: './search-by-name.component.html',
  styleUrls: ['./search-by-name.component.scss']
})
export class SearchByNameComponent {
  constructor(public empDetails: EmployeeDetailsService){
    this.empDetails.employeeArray = []
  }

  name!: string
  
  searchByName(name: string){
    this.empDetails.employeeArray = []
    for(let i in this.empDetails.EmployeeDetails){
      if(this.empDetails.EmployeeDetails[i].name.toLowerCase() === name.toLowerCase()){
        this.empDetails.employeeArray.push(this.empDetails.EmployeeDetails[i])
      }
    }
  }
}
