import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InapprefearlwidgetComponent } from './inapprefearlwidget.component';

describe('InapprefearlwidgetComponent', () => {
  let component: InapprefearlwidgetComponent;
  let fixture: ComponentFixture<InapprefearlwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InapprefearlwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InapprefearlwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
