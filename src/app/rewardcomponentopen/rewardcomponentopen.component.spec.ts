import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RewardcomponentopenComponent } from './rewardcomponentopen.component';

describe('RewardcomponentopenComponent', () => {
  let component: RewardcomponentopenComponent;
  let fixture: ComponentFixture<RewardcomponentopenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RewardcomponentopenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RewardcomponentopenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
