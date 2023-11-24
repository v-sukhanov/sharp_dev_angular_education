import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-resizeble-observable-test',
  templateUrl: './resizeble-observable-test.component.html',
  styleUrls: ['./resizeble-observable-test.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResizebleObservableTestComponent implements OnInit, OnDestroy{
  width = 500;
  observer!: ResizeObserver;

  constructor(
      private _host: ElementRef,
      private _cdRef: ChangeDetectorRef
  ) {}

  ngOnInit() {
    this.observer = new ResizeObserver(entries => {
      this._cdRef.markForCheck();
      this.width = entries[0].contentRect.width;
      console.log(entries[0].contentRect)
    });
    this.observer.observe(this._host.nativeElement);
  }

  ngOnDestroy() {
    this.observer.unobserve(this._host.nativeElement);
  }
}
