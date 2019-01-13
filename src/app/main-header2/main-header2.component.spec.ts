import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainHeader2Component } from './main-header2.component';

describe('MainHeader2Component', () => {
  let component: MainHeader2Component;
  let fixture: ComponentFixture<MainHeader2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainHeader2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainHeader2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
