import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { BooksActions, BooksApiActions } from './store/actions';
import { GoogleBooksService } from './google-books.serivce';
import { Store } from '@ngrx/store';
import { selectBookCollection, selectBooks } from './store/books.selector';

@Component({
	selector: 'app-ngrx-test-books',
	templateUrl: './ngrx-test-books.component.html',
	styleUrls: ['./ngrx-test-books.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgrxTestBooksComponent {
	books$ = this.store.select(selectBooks);
	bookCollection$ = this.store.select(selectBookCollection);

	onAdd(bookId: string) {
		this.store.dispatch(BooksActions.addBook({ bookId }));
	}

	onRemove(bookId: string) {
		this.store.dispatch(BooksActions.removeBook({ bookId }));
	}

	constructor(private booksService: GoogleBooksService, private store: Store) {
	}

	ngOnInit() {
		this.booksService
			.getBooks()
			.subscribe((books) =>
				this.store.dispatch(BooksApiActions.retrievedBookList({ books }))
			);
	}
}
