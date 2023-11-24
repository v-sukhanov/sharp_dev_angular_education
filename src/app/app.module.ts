import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResizebleObservableTestComponent } from './components/resizeble-observable-test/resizeble-observable-test.component';
import { MarkForCheckTestComponent } from './components/mark-for-check-test/mark-for-check-test.component';

@NgModule({
  declarations: [
    AppComponent,
    ResizebleObservableTestComponent,
    MarkForCheckTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
