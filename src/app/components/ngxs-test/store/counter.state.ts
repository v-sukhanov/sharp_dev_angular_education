import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { DecrementAction, IncrementAction, ResetAction } from './counter.actions';

export interface ICounterStateModel {
	counter: number;
}

const initialState = {
	counter: 0
}

@State<ICounterStateModel>({
	name: 'counter',
	defaults: initialState
})
@Injectable()
export class CounterState {
	@Selector()
	static counter(state: ICounterStateModel) {
		return state.counter;
	}

	@Action(IncrementAction)
	incrementAction(ctx: StateContext<ICounterStateModel>) {
		const state = ctx.getState();
		ctx.patchState({
			...state,
			counter: state.counter + 1
		})
	}

	@Action(DecrementAction)
	decrementAction(ctx: StateContext<ICounterStateModel>) {
		const state = ctx.getState();
		ctx.patchState({
			...state,
			counter: state.counter - 1
		})
	}

	@Action(ResetAction)
	resetAction(ctx: StateContext<ICounterStateModel>) {
		const state = ctx.getState();
		ctx.patchState(initialState)
	}
}
