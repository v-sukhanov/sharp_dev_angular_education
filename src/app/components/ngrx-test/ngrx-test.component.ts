import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { decrement, increment, reset } from './ngrx-test-counter/store/actions';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTestComponent {

}
