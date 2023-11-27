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
import { counterReducer } from './components/ngrx-test/ngrx-test-counter/store/reducer';
import { StoreModule } from '@ngrx/store';
import { NgrxTestCounterComponent } from './components/ngrx-test/ngrx-test-counter/ngrx-test-counter.component';
import { NgrxTestBooksComponent } from './components/ngrx-test/ngrx-test-books/ngrx-test-books.component';
import { collectionReducer } from './components/ngrx-test/ngrx-test-books/store/collection.reducer';
import { booksReducer } from './components/ngrx-test/ngrx-test-books/store/reducer';
import { BooksListComponent } from './components/ngrx-test/ngrx-test-books/books-list/books-list.component';
import { BookCollectionComponent } from './components/ngrx-test/ngrx-test-books/book-collection/book-collection.component';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './components/ngrx-test/ngrx-test-books/effects/books.effects';

@NgModule({
  declarations: [
    AppComponent,
    ResizebleObservableTestComponent,
    MarkForCheckTestComponent,
    AppMarkForCheckTestChild1Component,
    AppAppMarkForCheckTestChild2Component,
    SignalsTestComponent,
    ParamsFromInputTestComponent,
    NgrxTestComponent,
    NgrxTestCounterComponent,
    NgrxTestBooksComponent,
    BooksListComponent,
    BookCollectionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    EffectsModule.forRoot([
      BooksEffects
    ]),
    StoreModule.forRoot({
      count: counterReducer,
      books: booksReducer,
      collection: collectionReducer
    }),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
