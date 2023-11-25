import { ChangeDetectionStrategy, ChangeDetectorRef, Component, DoCheck, OnInit } from '@angular/core';
import { delay, of } from 'rxjs';

@Component({
  selector: 'app-app-mark-for-check-test-child1',
  templateUrl: './app-mark-for-check-test-child1.component.html',
  styleUrls: ['./app-mark-for-check-test-child1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppMarkForCheckTestChild1Component implements OnInit, DoCheck{
  get name() {
    console.warn('AppMarkForCheckTestChild1Component check')
    return 'name';
  }
  test = 4
  constructor(
      private _cdRef: ChangeDetectorRef
  ) {
  }


  ngOnInit() {
    // of(null)
    //     .pipe(
    //         delay(3000)
    //     )
    //     .subscribe(() => {
    //       this.test = 2313123;
    //       this._cdRef.detectChanges();
    //       // this._cdRef.detectChanges();
    //       // this._cdRef.markForCheck()
    //     })
  }

  ngDoCheck() {
    // console.log('AppMarkForCheckTestChild1Component ngDoCheck')
  }

  onClick() {

  }
}
