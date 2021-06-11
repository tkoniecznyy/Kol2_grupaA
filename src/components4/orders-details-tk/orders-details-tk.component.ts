import { Component, OnInit } from '@angular/core';
import {TKDataService} from '../../services2/tk-data.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-orders-details-tk',
  templateUrl: './orders-details-tk.component.html',
  styleUrls: ['./orders-details-tk.component.css']
})
export class OrdersDetailsTKComponent implements OnInit {
  public image: string;
  public text: string;
  public id: number;
  public title: string;
  public price: number;
  constructor(private service: TKDataService, private route: ActivatedRoute) { }

  ngOnInit() {
    let id: string;
    this.route.paramMap
      .subscribe(params => {
        id = params.get('id');
      });
    if (id) {
      this.service.getItemById(id).subscribe(res => {
        this.id = res['id'];
        this.title = res['title'];
        this.text = res['text'];
        this.image = res['image'];
        this.price = res['price'];
      });
    } else {
      this.id = 1;
    }
  }

}
