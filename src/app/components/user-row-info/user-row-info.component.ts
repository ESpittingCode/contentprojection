import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-row-info',
  templateUrl: './user-row-info.component.html',
  styleUrls: ['./user-row-info.component.scss']
})
export class UserRowInfoComponent implements OnInit {

  @Input()
  data: {
    id: string,
    name: string,
    email: string
  };

  @Output()
  switchChange = new EventEmitter<void>();

  // @Input()
  // withActionButton: boolean = false;

  // @Output()
  // btnAction = new EventEmitter<void>();

  @Input()
  hideSwitch: boolean = false;

  @Input()
  actions: Array<{
    label: string;
  }> = [];

  @Input()
  actionsWithType: Array<{
    label: string;
    type: 'btn' | 'toggle';
  }> = [];

  @Output()
  actionClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  emitAction(index: number): void {
    this.actionClick.emit(index);
  }

}
