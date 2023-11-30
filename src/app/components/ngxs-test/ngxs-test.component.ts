import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DecrementAction, IncrementAction, ResetAction } from './store/counter.actions';
import { Select, Store } from '@ngxs/store';
import { CounterState } from './store/counter.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngxs-test',
  templateUrl: './ngxs-test.component.html',
  styleUrls: ['./ngxs-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxsTestComponent {
  @Select(CounterState.counter) counter$!: Observable<number>;

  constructor(
      private _store: Store
  ) {
  }


  increment() {
    this._store.dispatch(new IncrementAction());
  }

  decrement() {
    this._store.dispatch(new DecrementAction());
  }

  reset() {
    this._store.dispatch(new ResetAction());
  }
}
