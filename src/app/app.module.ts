import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeDetailsService } from './employee-details.service';
import { AddComponent } from './add/add.component';
import { DeleteComponent } from './delete/delete.component';
import { SearchComponent } from './search/search.component';
import { UpdateComponent } from './update/update.component';
import { FormsModule } from '@angular/forms';
import { SearchByNameComponent } from './search-by-name/search-by-name.component';
import { SearchByCityComponent } from './search-by-city/search-by-city.component';
import { SearchByGenderComponent } from './search-by-gender/search-by-gender.component';
import { SearchByMaritalStatusComponent } from './search-by-marital-status/search-by-marital-status.component';
import { SearchFullyComponent } from './search-fully/search-fully.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    DeleteComponent,
    SearchComponent,
    UpdateComponent,
    SearchByNameComponent,
    SearchByCityComponent,
    SearchByGenderComponent,
    SearchByMaritalStatusComponent,
    SearchFullyComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [EmployeeDetailsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
