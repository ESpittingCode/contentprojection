import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrls: ['./search-input.component.scss']
})
export class SearchInputComponent implements OnInit, OnDestroy {

  @Input()
  placeholder: string = 'Username';

  @Output()
  newQuery = new EventEmitter<string>();

  private debouncer$ = new Subject<string>();
  private debouncerSubscription: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer$.pipe(
      debounceTime(300)
    ).subscribe(newQuery => this.newQuery.emit(newQuery));
  }

  onNewQuery(e: InputEvent): void {
    this.debouncer$.next((e.target as HTMLInputElement).value);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe();
  }

}
