import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InAppRleftComponent } from './in-app-rleft.component';

describe('InAppRleftComponent', () => {
  let component: InAppRleftComponent;
  let fixture: ComponentFixture<InAppRleftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InAppRleftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InAppRleftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
