import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  add: boolean = false
  delete: boolean = false
  search: boolean = false

  Add(){
    this.add = true
    this.delete = false
    this.search = false
  }
  Delete(){
    this.add = false
    this.delete = true
    this.search = false
  }
  Search(){
    this.add = false
    this.delete = false
    this.search = true
  }
}

