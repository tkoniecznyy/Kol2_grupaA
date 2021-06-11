import {Component, OnInit} from '@angular/core';
import {TKServiceService} from '../../tk-service.service';
@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  public items$: any;

  constructor(private service: TKServiceService) {
  }
  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.service.getAll().subscribe(response => {
      this.items$ = response;
    });
  }
}
