import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-app-app-mark-for-check-test-child2',
  templateUrl: './app-app-mark-for-check-test-child2.component.html',
  styleUrls: ['./app-app-mark-for-check-test-child2.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppAppMarkForCheckTestChild2Component implements OnInit{
  get name() {
    console.warn('AppAppMarkForCheckTestChild2Component check')
    return 'name';
  }
  test = 4

  constructor(
      private _cdRef: ChangeDetectorRef
  ) {
  }


  ngOnInit() {
    of(null)
        .pipe(
            delay(1000)
        )
        .subscribe(() => {
          this.test = 3123;
        })
    // of(null)
    //     .pipe(
    //         delay(5000)
    //     )
    //     .subscribe(() => {
    //       this._cdRef.markForCheck()
    //     })
  }

  onClick() {

  }
}
