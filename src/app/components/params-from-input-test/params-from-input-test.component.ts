import { ChangeDetectionStrategy, Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-params-from-input-test',
  templateUrl: './params-from-input-test.component.html',
  styleUrls: ['./params-from-input-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ParamsFromInputTestComponent {
  @Input({transform: numberAttribute}) id!: string
}
