import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsTKComponent } from './orders-details-tk.component';

describe('OrdersDetailsTKComponent', () => {
  let component: OrdersDetailsTKComponent;
  let fixture: ComponentFixture<OrdersDetailsTKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsTKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsTKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
