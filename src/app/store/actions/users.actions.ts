import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const uploadUsers = createAction('[Users] Upload Users');

export const uploadUsersSuccess = createAction(
    '[Users] Upload Users Success',
    props<{ users: User[] }>()
);

export const uploadUsersError = createAction(
    '[Users] Upload Users Error',
    props<{ payload: any }>()
);