import { Employee } from './../interface';
import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-search-fully',
  templateUrl: './search-fully.component.html',
  styleUrls: ['./search-fully.component.scss']
})
export class SearchFullyComponent {
  
  constructor(public empDetails: EmployeeDetailsService){
    this.empDetails.employeeArray = Object.values(this.empDetails.EmployeeDetails)
  }

    
}
  