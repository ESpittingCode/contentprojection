import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  users = [
    {
      id: '1',
      name: 'Mark',
      email: 'otto@fake.com'
    },
    {
      id: '2',
      name: 'Larry',
      email: 'thebird@fake.com'
    },
    {
      id: '3',
      name: 'Jacob',
      email: 'thornton@fake.com'
    },
    {
      id: '4',
      name: 'Ariana',
      email: 'arigrande@fake.com'
    },
    {
      id: '5',
      name: 'John',
      email: 'legend@fake.com'
    },
    {
      id: '6',
      name: 'Luis',
      email: 'miguel@fake.com'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
