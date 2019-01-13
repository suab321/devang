import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardcComponent } from './rewardc.component';

describe('RewardcComponent', () => {
  let component: RewardcComponent;
  let fixture: ComponentFixture<RewardcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
