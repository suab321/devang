import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstateSharingstateComponent } from './formstate-sharingstate.component';

describe('FormstateSharingstateComponent', () => {
  let component: FormstateSharingstateComponent;
  let fixture: ComponentFixture<FormstateSharingstateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormstateSharingstateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormstateSharingstateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
