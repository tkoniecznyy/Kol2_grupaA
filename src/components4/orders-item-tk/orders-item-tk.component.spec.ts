import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemTKComponent} from './orders-item-tk.component';

describe('OrdersItemTKComponent', () => {
  let component: OrdersItemTKComponent;
  let fixture: ComponentFixture<OrdersItemTKComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemTKComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemTKComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
