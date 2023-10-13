import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarLabelComponent } from './car-label.component';

describe('CarLabelComponent', () => {
  let component: CarLabelComponent;
  let fixture: ComponentFixture<CarLabelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarLabelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
