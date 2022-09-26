import { createReducer, on } from '@ngrx/store';
import { uploadUsers, uploadUsersSuccess, uploadUsersError } from '../actions';
import { User } from 'src/app/models/user.model';

export interface UsersState {
    users: User[];
    loaded: boolean;
    loading: boolean;
    error: any; 
}

export const usersinItialState: UsersState= {
    users: [],
    loaded: false,
    loading: false,
    error: null 
}

export const usersReducer = createReducer(usersinItialState,

    on(uploadUsers, (state) => ({ ...state, loading: true })),

    on(uploadUsersSuccess, (state, {users}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        users: [...users]
    })),

    on(uploadUsersError, (state, {payload}) => ({ 
        ...state, 
        loading: false,
        loaded: false,
        error: {
            url: payload.url,
            name: payload.name,
            message: payload.message
        }
    })),

);

