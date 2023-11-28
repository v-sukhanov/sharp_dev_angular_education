import { ChangeDetectionStrategy, Component } from '@angular/core';
import { selectCar } from './store/car.selector';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-ngrx-router-test',
  templateUrl: './ngrx-router-test.component.html',
  styleUrls: ['./ngrx-router-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxRouterTestComponent {
  car$ = this._store.select(selectCar);

  constructor(
      private _store: Store
  ) {
    this.car$.subscribe(x => {
      console.log(x)
    })
  }
}
