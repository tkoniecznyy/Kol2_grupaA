import { Component, OnInit } from '@angular/core';
import { TKDataService} from '../../services/tk-data.service';

@Component({
  selector: 'app-orders-tk',
  templateUrl: './orders-tk.component.html',
  styleUrls: ['./orders-tk.component.css']
})
export class OrdersTKComponent implements OnInit {

  public items$: any;

  constructor(private service: TKDataService) {
  }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    this.service.getAllItems().subscribe(response => {
      this.items$ = response;
    });
  }
}
