import { Employee } from './../interface';
import { Component } from '@angular/core';
import { EmployeeDetailsService } from '../employee-details.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {
  constructor(public empDetails : EmployeeDetailsService){}
}
