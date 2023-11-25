import { AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { delay, of, timer } from 'rxjs';

@Component({
  selector: 'app-mark-for-check-test',
  templateUrl: './mark-for-check-test.component.html',
  styleUrls: ['./mark-for-check-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarkForCheckTestComponent implements OnInit, AfterViewInit{
  @Input() val = 1;
  test = 2;

  get name() {
    console.warn('MarkForCheckTestComponent check')
    return 'name';
  }

  constructor(
      private _cdRef: ChangeDetectorRef
  ) {
  }

  ngOnInit() {
    // timer(1000)
    //     .subscribe(() => {
    //       this.test = 1000;
    //     })

  }

  ngAfterViewInit() {
    // of(null)
    //     .subscribe(() => {
    //       console.log(-1)
    //       this.test = -1;
    //       this._cdRef.markForCheck()
    //     })
    // of(null)
    //     .pipe(
    //         delay(5000)
    //     )
    //     .subscribe(() => {
    //       console.log(3)
    //       this.test = 3;
    //       this._cdRef.markForCheck()
    //     })
  }
}
