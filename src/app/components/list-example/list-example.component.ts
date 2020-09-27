import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-example',
  templateUrl: './list-example.component.html',
  styleUrls: ['./list-example.component.scss']
})
export class ListExampleComponent implements OnInit {

  customActions = [
    {
      label: 'Rechazar'
    },
    {
      label: 'Validar'
    }
  ];

  customTypedActions = [
    {
      label: 'No',
      type: 'button'
    },
    {
      label: '',
      type: 'toggle'
    },
    {
      label: 'Mames',
      type: 'button'
    }
  ];

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

  onNewQuery(newQuery: string): void {
    console.log('I must query: ' + newQuery);
  }

  onActionClick(index: number): void {
    console.log('Click on action with index: ' + index);
  }

}
