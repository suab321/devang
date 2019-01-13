import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StepIntegrationComponent } from './step-integration.component';

describe('StepIntegrationComponent', () => {
  let component: StepIntegrationComponent;
  let fixture: ComponentFixture<StepIntegrationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StepIntegrationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StepIntegrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
