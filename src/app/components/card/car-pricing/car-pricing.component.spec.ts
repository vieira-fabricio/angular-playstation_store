import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarPricingComponent } from './car-pricing.component';

describe('CarPricingComponent', () => {
  let component: CarPricingComponent;
  let fixture: ComponentFixture<CarPricingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarPricingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarPricingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
