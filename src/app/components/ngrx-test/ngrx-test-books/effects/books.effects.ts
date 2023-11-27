import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { BooksActions } from '../store/actions';
import { map, switchMap } from 'rxjs';

@Injectable()
export class BooksEffects {
	onAddBooks$ = createEffect(() =>
		this.actions$.pipe(
			ofType(BooksActions.addBook),
			map(() => {
					return BooksActions.addBookSuccess()
				}
			)
		)
	);


	constructor(
		private store: Store,
		private actions$: Actions
	) {
	}
}
