import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-orders-item-tk',
  templateUrl: './orders-item-tk.component.html',
  styleUrls: ['./orders-item-tk.component.css']
})
export class OrdersItemTKComponent implements OnInit {

  @Input() id: string;
  @Input() title: string;
  @Input() text: string;
  @Input() image: string;
  @Input() price: number;

  constructor() { }

  ngOnInit() {
  }

}
