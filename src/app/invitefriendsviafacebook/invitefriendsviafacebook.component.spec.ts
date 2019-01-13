import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvitefriendsviafacebookComponent } from './invitefriendsviafacebook.component';

describe('InvitefriendsviafacebookComponent', () => {
  let component: InvitefriendsviafacebookComponent;
  let fixture: ComponentFixture<InvitefriendsviafacebookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvitefriendsviafacebookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvitefriendsviafacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
