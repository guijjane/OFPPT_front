import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitierFormateurComponent } from './initier-formateur.component';

describe('InitierFormateurComponent', () => {
  let component: InitierFormateurComponent;
  let fixture: ComponentFixture<InitierFormateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitierFormateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitierFormateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
