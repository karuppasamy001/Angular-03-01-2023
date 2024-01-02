import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByMaritalStatusComponent } from './search-by-marital-status.component';

describe('SearchByMaritalStatusComponent', () => {
  let component: SearchByMaritalStatusComponent;
  let fixture: ComponentFixture<SearchByMaritalStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByMaritalStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByMaritalStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
