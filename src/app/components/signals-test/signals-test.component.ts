import {
	afterRender,
	AfterViewInit,
	ChangeDetectionStrategy,
	Component,
	computed,
	effect,
	signal
} from '@angular/core';
import { interval, timer } from 'rxjs';

@Component({
	selector: 'app-signals-test',
	templateUrl: './signals-test.component.html',
	styleUrls: ['./signals-test.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class SignalsTestComponent implements AfterViewInit{
	items = [{ name: 'Product A', price: 10 }, { name: 'Product B', price: 15 }, { name: 'Product C', price: 20 },];


	itemList = signal(this.items);

	totalPrice = computed(() => {
		return this.itemList().reduce((acc, curr) => acc + curr.price, 0);
	});

	constructor() {
		afterRender(() => {
			console.log('render!')
		})
		effect(() => {
			console.log(`The totalPrice is: ${this.totalPrice()}`);
		});
	}

	removeItem(item: any) {
		this.itemList.set(this.itemList().filter((i) => i !== item));
	}

	ngAfterViewInit() {
		timer(5000)
			.subscribe(() => {
				this.itemList.mutate((list) => {
					list[0].price = 56;
				});
			})
	}
}
