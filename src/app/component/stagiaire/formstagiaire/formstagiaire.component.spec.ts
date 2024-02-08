import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstagiaireComponent } from './formstagiaire.component';

describe('FormstagiaireComponent', () => {
  let component: FormstagiaireComponent;
  let fixture: ComponentFixture<FormstagiaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstagiaireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstagiaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
