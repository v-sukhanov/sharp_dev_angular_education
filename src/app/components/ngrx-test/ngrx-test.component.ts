import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-ngrx-test',
  templateUrl: './ngrx-test.component.html',
  styleUrls: ['./ngrx-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTestComponent {

}
