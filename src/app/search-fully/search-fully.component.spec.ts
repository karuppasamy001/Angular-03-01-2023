import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchFullyComponent } from './search-fully.component';

describe('SearchFullyComponent', () => {
  let component: SearchFullyComponent;
  let fixture: ComponentFixture<SearchFullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchFullyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchFullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
