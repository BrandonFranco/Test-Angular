import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticaComponent } from './robotica.component';

describe('RoboticaComponent', () => {
  let component: RoboticaComponent;
  let fixture: ComponentFixture<RoboticaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoboticaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoboticaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
