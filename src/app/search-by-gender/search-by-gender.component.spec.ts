import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByGenderComponent } from './search-by-gender.component';

describe('SearchByGenderComponent', () => {
  let component: SearchByGenderComponent;
  let fixture: ComponentFixture<SearchByGenderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByGenderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByGenderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
