import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForminviteWihIconComponent } from './forminvite-wih-icon.component';

describe('ForminviteWihIconComponent', () => {
  let component: ForminviteWihIconComponent;
  let fixture: ComponentFixture<ForminviteWihIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForminviteWihIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForminviteWihIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
