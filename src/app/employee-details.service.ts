import { Injectable } from '@angular/core';
import { Employee } from './interface';
import { generateSampleData } from './sampleData';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailsService {

  employeeArray : Employee[] = []

  EmployeeDetails : {
    [key: number]: Employee;
  } = generateSampleData()

}
