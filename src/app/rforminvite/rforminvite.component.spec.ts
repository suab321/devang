import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RforminviteComponent } from './rforminvite.component';

describe('RforminviteComponent', () => {
  let component: RforminviteComponent;
  let fixture: ComponentFixture<RforminviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RforminviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RforminviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
