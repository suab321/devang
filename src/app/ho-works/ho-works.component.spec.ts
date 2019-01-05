import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoWorksComponent } from './ho-works.component';

describe('HoWorksComponent', () => {
  let component: HoWorksComponent;
  let fixture: ComponentFixture<HoWorksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoWorksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
