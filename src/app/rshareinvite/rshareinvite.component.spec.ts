import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RshareinviteComponent } from './rshareinvite.component';

describe('RshareinviteComponent', () => {
  let component: RshareinviteComponent;
  let fixture: ComponentFixture<RshareinviteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RshareinviteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RshareinviteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
