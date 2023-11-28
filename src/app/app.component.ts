import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { appInit } from './components/ngrx-router-test/store/car.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit{
  get title() {
    console.warn('title check')
    return  'project';
  }

  constructor(
      private _store: Store
  ) {
  }

  ngOnInit() {
    this._store.dispatch(
        appInit({
          cars: [
            { id: '1', make: 'ford', model: 'mustang', year: '2005' },
            { id: '2', make: 'ford', model: 'mustang', year: '1987' },
            { id: '3', make: 'ford', model: 'mustang', year: '1976' },
          ],
        })
    );
  }
}
