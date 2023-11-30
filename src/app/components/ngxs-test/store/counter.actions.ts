import { Action } from '@ngxs/store';


export class IncrementAction {
	static readonly type = '[counter] increment';
}

export class DecrementAction {
	static readonly type = '[counter] decrement';

}



export class ResetAction {
	static readonly type = '[counter] reset';

}
