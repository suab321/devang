import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardwidgetComponent } from './rewardwidget.component';

describe('RewardwidgetComponent', () => {
  let component: RewardwidgetComponent;
  let fixture: ComponentFixture<RewardwidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardwidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardwidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
