import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestonereferalComponent } from './milestonereferal.component';

describe('MilestonereferalComponent', () => {
  let component: MilestonereferalComponent;
  let fixture: ComponentFixture<MilestonereferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestonereferalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestonereferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
