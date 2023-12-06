import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Select } from '@ngxs/store';
import { Animal, ZooState } from './store/zoo.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngxs-mapped-sub-states',
  templateUrl: './ngxs-mapped-sub-states.component.html',
  styleUrls: ['./ngxs-mapped-sub-states.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxsMappedSubStatesComponent {
  @Select(ZooState.pandas('zoo1')) pandas$!: Observable<Animal[]>;
}
