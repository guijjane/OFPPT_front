import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRapportPPComponent } from './demande-rapport-pp.component';

describe('DemandeRapportPPComponent', () => {
  let component: DemandeRapportPPComponent;
  let fixture: ComponentFixture<DemandeRapportPPComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeRapportPPComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeRapportPPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
