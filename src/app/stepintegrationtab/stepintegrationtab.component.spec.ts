import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepintegrationtabComponent } from './stepintegrationtab.component';

describe('StepintegrationtabComponent', () => {
  let component: StepintegrationtabComponent;
  let fixture: ComponentFixture<StepintegrationtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepintegrationtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepintegrationtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
