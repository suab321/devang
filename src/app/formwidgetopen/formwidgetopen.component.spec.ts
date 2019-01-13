import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormwidgetopenComponent } from './formwidgetopen.component';

describe('FormwidgetopenComponent', () => {
  let component: FormwidgetopenComponent;
  let fixture: ComponentFixture<FormwidgetopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormwidgetopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormwidgetopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
