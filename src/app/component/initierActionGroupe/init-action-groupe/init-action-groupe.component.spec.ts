import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitActionGroupeComponent } from './init-action-groupe.component';

describe('InitActionGroupeComponent', () => {
  let component: InitActionGroupeComponent;
  let fixture: ComponentFixture<InitActionGroupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitActionGroupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitActionGroupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
