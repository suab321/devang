import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendcommercemilestoneComponent } from './friendcommercemilestone.component';

describe('FriendcommercemilestoneComponent', () => {
  let component: FriendcommercemilestoneComponent;
  let fixture: ComponentFixture<FriendcommercemilestoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FriendcommercemilestoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FriendcommercemilestoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
