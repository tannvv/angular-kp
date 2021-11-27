import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveObjectComponent } from './structural-directive-object.component';

describe('StructuralDirectiveObjectComponent', () => {
  let component: StructuralDirectiveObjectComponent;
  let fixture: ComponentFixture<StructuralDirectiveObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StructuralDirectiveObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StructuralDirectiveObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
