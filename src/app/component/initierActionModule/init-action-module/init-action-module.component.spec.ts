import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InitActionModuleComponent } from './init-action-module.component';

describe('InitActionModuleComponent', () => {
  let component: InitActionModuleComponent;
  let fixture: ComponentFixture<InitActionModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InitActionModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InitActionModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
