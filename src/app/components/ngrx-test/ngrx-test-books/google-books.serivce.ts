import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Book } from './store/models';

@Injectable({ providedIn: 'root' })
export class GoogleBooksService {
	constructor(private http: HttpClient) {}

	getBooks(): Observable<Array<Book>> {
		return this.http
			.get<{ items: Book[] }>(
				'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks'
			)
			.pipe(map((books) => books.items || []));
	}
}
