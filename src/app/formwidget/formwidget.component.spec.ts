import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormwidgetComponent } from './formwidget.component';

describe('FormwidgetComponent', () => {
  let component: FormwidgetComponent;
  let fixture: ComponentFixture<FormwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
