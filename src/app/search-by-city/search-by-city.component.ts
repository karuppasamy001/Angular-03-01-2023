import { EmployeeDetailsService } from './../employee-details.service';
import { Component } from '@angular/core';
import { Employee } from '../interface';

@Component({
  selector: 'app-search-by-city',
  templateUrl: './search-by-city.component.html',
  styleUrls: ['./search-by-city.component.scss']
})
export class SearchByCityComponent {
  cityName!: string
  constructor(public empDetails: EmployeeDetailsService){
    this.empDetails.employeeArray = []
  }
  
  searchByCity(city: string){
    this.empDetails.employeeArray = Object.values(this.empDetails.EmployeeDetails).filter(emp => emp.city === city)
    console.log(this.empDetails.employeeArray) 
  }

  
}
