import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionFormsComponent } from './action-forms.component';

describe('ActionFormsComponent', () => {
  let component: ActionFormsComponent;
  let fixture: ComponentFixture<ActionFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ActionFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
