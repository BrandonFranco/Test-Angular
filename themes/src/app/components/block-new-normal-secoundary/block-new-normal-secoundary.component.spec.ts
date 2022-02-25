import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNewNormalSecoundaryComponent } from './block-new-normal-secoundary.component';

describe('BlockNewNormalSecoundaryComponent', () => {
  let component: BlockNewNormalSecoundaryComponent;
  let fixture: ComponentFixture<BlockNewNormalSecoundaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockNewNormalSecoundaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNewNormalSecoundaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
