import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockNewNormalComponent } from './block-new-normal.component';

describe('BlockNewNormalComponent', () => {
  let component: BlockNewNormalComponent;
  let fixture: ComponentFixture<BlockNewNormalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlockNewNormalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlockNewNormalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
