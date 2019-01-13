import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppRrightComponent } from './in-app-rright.component';

describe('InAppRrightComponent', () => {
  let component: InAppRrightComponent;
  let fixture: ComponentFixture<InAppRrightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppRrightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppRrightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
