import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainconfirmemailComponent } from './mainconfirmemail.component';

describe('MainconfirmemailComponent', () => {
  let component: MainconfirmemailComponent;
  let fixture: ComponentFixture<MainconfirmemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainconfirmemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainconfirmemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
