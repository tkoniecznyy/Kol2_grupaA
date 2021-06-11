import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-tk-component',
  templateUrl: './tk-component.component.html',
  styleUrls: ['./tk-component.component.css']
})
export class TKComponentComponent implements OnInit {
  @Input() id: number;

  constructor() { }


  ngOnInit() {
  }

}
