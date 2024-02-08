import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormformateurComponent } from './formformateur.component';

describe('FormformateurComponent', () => {
  let component: FormformateurComponent;
  let fixture: ComponentFixture<FormformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
