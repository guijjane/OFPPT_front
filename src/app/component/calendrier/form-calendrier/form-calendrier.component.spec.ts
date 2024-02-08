import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormCalendrierComponent } from './form-calendrier.component';

describe('FormCalendrierComponent', () => {
  let component: FormCalendrierComponent;
  let fixture: ComponentFixture<FormCalendrierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormCalendrierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormCalendrierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
