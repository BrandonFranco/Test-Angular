import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasLeidoComponent } from './mas-leido.component';

describe('MasLeidoComponent', () => {
  let component: MasLeidoComponent;
  let fixture: ComponentFixture<MasLeidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasLeidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasLeidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
