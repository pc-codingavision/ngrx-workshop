import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from '../../counter.actions';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css']
})
export class MyCounterComponent implements OnInit {

  count$: Observable<number>;

  constructor(private store: Store<{count: number}>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    this.count$ = store.select('count');
  }

  ngOnInit(): void {
  }

  increment(): void {
    // TODO: Dispatch an increment action
    this.store.dispatch(increment());
  }

  decrement(): void {
    // TODO: Dispatch a decrement action
    this.store.dispatch(decrement());
  }

  reset(): void {
    // TODO: Dispatch a reset action
    this.store.dispatch(reset());
  }
}
