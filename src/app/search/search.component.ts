import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  filter!: string;

  byName() {
    this.filter = 'name';
  }
  byGender() {
    this.filter = 'gender';
  }
  byCity() {
    this.filter = 'city';
  }
  byMaritalStatus() {
    this.filter = 'marital';
  }
  byAll() {
    this.filter = 'full';
  }
}
