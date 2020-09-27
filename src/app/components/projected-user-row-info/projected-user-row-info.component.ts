import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-projected-user-row-info',
  templateUrl: './projected-user-row-info.component.html',
  styleUrls: ['./projected-user-row-info.component.scss']
})
export class ProjectedUserRowInfoComponent implements OnInit {

  @Input()
  data: {
    id: string;
    name: string;
    email: string;
  };

  constructor() { }

  ngOnInit(): void {
  }

}
