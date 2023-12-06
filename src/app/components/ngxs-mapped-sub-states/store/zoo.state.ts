import { createSelector } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { State } from '@ngxs/store';

export interface Animal {
	type: string;
	age: string;
	name: string;
}

interface ZooStateModel {
	[id: string]: {
		animals: Animal[];
		ageFilter: string;
	};
}

@State<ZooStateModel>({
	name: 'animals',
	defaults: {
		zoo1: {
			ageFilter: 'young',
			animals: [
				{ type: 'zebra', age: 'old', name: 'Ponny' },
				{ type: 'panda', age: 'young', name: 'Jimmy' }
			]
		},
		zoo2: {
			ageFilter: 'old',
			animals: [
				{ type: 'zebra', age: 'old', name: 'Ponny 2' },
				{ type: 'panda', age: 'young', name: 'Jimmy 2' }
			]
		}
	}
})
@Injectable()
export class ZooState {
	static getZooAnimals(zooName: string) {
		return createSelector([ZooState as any], (state: ZooStateModel) => state[zooName].animals);
	}

	static pandas(zooName: string) {
		return createSelector([ZooState.getZooAnimals(zooName)], (state: Animal[]) => {
			console.log(state)

			return state.filter(animal => animal.type === 'panda' && animal.age === 'young');
		});
	}

	static pandasWithoutMemoize(zooName: string) {
		return createSelector([ZooState as any], (state: ZooStateModel) => {
			return state[zooName].animals.filter(
				animal => animal.type === 'panda' && animal.age === 'young'
			);
		});
	}
}
