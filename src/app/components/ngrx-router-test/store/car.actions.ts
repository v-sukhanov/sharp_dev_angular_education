import { createAction, props } from '@ngrx/store';
import { Car } from './car.reducer';


export const appInit = createAction('[App] Init', props<{ cars: Car[] }>());

