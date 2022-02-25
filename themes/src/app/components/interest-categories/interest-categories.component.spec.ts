import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InterestCategoriesComponent } from './interest-categories.component';

describe('InterestCategoriesComponent', () => {
  let component: InterestCategoriesComponent;
  let fixture: ComponentFixture<InterestCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InterestCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InterestCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
