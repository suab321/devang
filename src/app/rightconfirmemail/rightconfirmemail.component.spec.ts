import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RightconfirmemailComponent } from './rightconfirmemail.component';

describe('RightconfirmemailComponent', () => {
  let component: RightconfirmemailComponent;
  let fixture: ComponentFixture<RightconfirmemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RightconfirmemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RightconfirmemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
