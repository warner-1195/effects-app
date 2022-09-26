import { createAction, props } from '@ngrx/store';
import { User } from 'src/app/models/user.model';

export const uploadUser = createAction(
    '[User] Upload Users',
    props<{id:string}>()
);

export const uploadUserSuccess = createAction(
    '[User] Upload User Success',
    props<{ user: User }>()
);

export const uploadUserError = createAction(
    '[User] Upload User Error',
    props<{ payload: any }>()
);