import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { Book } from './models';

export const BooksActions = createActionGroup({
	source: 'Books',
	events: {
		'Add Book': props<{ bookId: string }>(),
		'Add Book success': emptyProps(),
		'Remove Book': props<{ bookId: string }>(),
	},
});

export const BooksApiActions = createActionGroup({
	source: 'Books API',
	events: {
		'Retrieved Book List': props<{ books: ReadonlyArray<Book> }>(),
	},
});
