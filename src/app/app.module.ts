import { Injectable, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
	ResizebleObservableTestComponent
} from './components/resizeble-observable-test/resizeble-observable-test.component';
import { MarkForCheckTestComponent } from './components/mark-for-check-test/mark-for-check-test.component';
import {
	AppMarkForCheckTestChild1Component
} from './components/mark-for-check-test/app-mark-for-check-test-child1/app-mark-for-check-test-child1.component';
import {
	AppAppMarkForCheckTestChild2Component
} from './components/mark-for-check-test/app-mark-for-check-test-child1/app-app-mark-for-check-test-child2/app-app-mark-for-check-test-child2.component';
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
import {
	BookCollectionComponent
} from './components/ngrx-test/ngrx-test-books/book-collection/book-collection.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { BooksEffects } from './components/ngrx-test/ngrx-test-books/effects/books.effects';
import { NgrxRouterTestComponent } from './components/ngrx-router-test/ngrx-router-test.component';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { reducer } from './components/ngrx-router-test/store/car.reducer';
import { NgxsTestComponent } from './components/ngxs-test/ngxs-test.component';
import { getActionTypeFromInstance, NgxsModule } from '@ngxs/store';
import { CounterState } from './components/ngxs-test/store/counter.state';
import { NGXS_LOGGER_PLUGIN_OPTIONS, NgxsLoggerPluginModule } from '@ngxs/logger-plugin';
import { ResetAction } from './components/ngxs-test/store/counter.actions';
import { NgxsReduxDevtoolsPluginModule } from '@ngxs/devtools-plugin';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';



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
		NgrxRouterTestComponent,
		NgxsTestComponent,
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
		StoreModule.forRoot({ cars: reducer, router: routerReducer }),
		NgxsModule.forRoot([
			CounterState
		]),
		NgxsLoggerPluginModule.forRoot({
			collapsed: false,
			filter: action => getActionTypeFromInstance(action) !== ResetAction.type
		}),
		NgxsStoragePluginModule.forRoot({
			key: 'counter'
		}),
		NgxsReduxDevtoolsPluginModule.forRoot(),
		StoreRouterConnectingModule.forRoot(),
		HttpClientModule
	],
	providers: [
	],
	bootstrap: [AppComponent]
})
export class AppModule {
}
