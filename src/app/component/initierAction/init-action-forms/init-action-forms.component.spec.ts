import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitActionFormsComponent } from './init-action-forms.component';

describe('InitActionFormsComponent', () => {
  let component: InitActionFormsComponent;
  let fixture: ComponentFixture<InitActionFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitActionFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitActionFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
