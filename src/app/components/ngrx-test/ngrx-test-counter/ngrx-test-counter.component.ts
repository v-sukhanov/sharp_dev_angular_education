import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './store/actions';

@Component({
  selector: 'app-ngrx-test-counter',
  templateUrl: './ngrx-test-counter.component.html',
  styleUrls: ['./ngrx-test-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTestCounterComponent {
  count$: Observable<number>

  constructor(private store: Store<{ count: number }>) {
    this.count$ = store.select('count');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
