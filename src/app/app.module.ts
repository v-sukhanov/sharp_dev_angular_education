import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizebleObservableTestComponent } from './components/resizeble-observable-test/resizeble-observable-test.component';
import { MarkForCheckTestComponent } from './components/mark-for-check-test/mark-for-check-test.component';
import { AppMarkForCheckTestChild1Component } from './components/mark-for-check-test/app-mark-for-check-test-child1/app-mark-for-check-test-child1.component';
import { AppAppMarkForCheckTestChild2Component } from './components/mark-for-check-test/app-mark-for-check-test-child1/app-app-mark-for-check-test-child2/app-app-mark-for-check-test-child2.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizebleObservableTestComponent,
    MarkForCheckTestComponent,
    AppMarkForCheckTestChild1Component,
    AppAppMarkForCheckTestChild2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
