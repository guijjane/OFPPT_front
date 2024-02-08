import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitierFormsComponent } from './initier-forms.component';

describe('InitierFormsComponent', () => {
  let component: InitierFormsComponent;
  let fixture: ComponentFixture<InitierFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitierFormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitierFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
