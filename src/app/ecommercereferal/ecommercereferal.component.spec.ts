import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercereferalComponent } from './ecommercereferal.component';

describe('EcommercereferalComponent', () => {
  let component: EcommercereferalComponent;
  let fixture: ComponentFixture<EcommercereferalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcommercereferalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcommercereferalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
