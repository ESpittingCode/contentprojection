import { Component, ContentChild, ElementRef, EventEmitter, HostListener, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-projected-search-input',
  templateUrl: './projected-search-input.component.html',
  styleUrls: ['./projected-search-input.component.scss']
})
export class ProjectedSearchInputComponent implements OnInit, OnDestroy {

  @Output()
  newQuery = new EventEmitter<string>();

  // @ContentChild('myInputRef')
  // inputRef: ElementRef<HTMLInputElement>;

  private debouncer$ = new Subject<string>();
  private debouncerSubscription: Subscription;

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer$.pipe(
      debounceTime(300)
    ).subscribe(newQuery => this.newQuery.emit(newQuery));
  }

  @HostListener('input', ['$event'])
  onNewQuery(e: InputEvent): void {
    this.debouncer$.next((e.target as HTMLInputElement).value);
  }

  ngOnDestroy(): void {
    this.debouncerSubscription.unsubscribe();
  }

}
