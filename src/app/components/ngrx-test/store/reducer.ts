import { Action } from "@ngrx/store";

export interface Reducer<T> {
	(state: T, action: Action): T;
}

export const counter: Reducer<number> = (state: number = 0, action: Action) => {
	switch(action.type){
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		default:
			return state;
	}
};
