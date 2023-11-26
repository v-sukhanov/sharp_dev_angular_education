import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizebleObservableTestComponent } from './components/resizeble-observable-test/resizeble-observable-test.component';
import { MarkForCheckTestComponent } from './components/mark-for-check-test/mark-for-check-test.component';
import { AppMarkForCheckTestChild1Component } from './components/mark-for-check-test/app-mark-for-check-test-child1/app-mark-for-check-test-child1.component';
import { AppAppMarkForCheckTestChild2Component } from './components/mark-for-check-test/app-mark-for-check-test-child1/app-app-mark-for-check-test-child2/app-app-mark-for-check-test-child2.component';
import { SignalsTestComponent } from './components/signals-test/signals-test.component';
import { ParamsFromInputTestComponent } from './components/params-from-input-test/params-from-input-test.component';
import { NgrxTestComponent } from './components/ngrx-test/ngrx-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizebleObservableTestComponent,
    MarkForCheckTestComponent,
    AppMarkForCheckTestChild1Component,
    AppAppMarkForCheckTestChild2Component,
    SignalsTestComponent,
    ParamsFromInputTestComponent,
    NgrxTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
