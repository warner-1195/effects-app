import { createReducer, on } from '@ngrx/store';
import { uploadUser, uploadUserSuccess, uploadUserError } from '../actions';
import { User } from 'src/app/models/user.model';

export interface userState {
    id: string | any,
    user: User | any,
    loaded: boolean,
    loading: boolean,
    error: any
}

export const userinItialState: userState= {
    id: null,
    user: null,
    loaded: false,
    loading: false,
    error: null 
}

export const userReducer = createReducer(userinItialState,

    on(uploadUser, (state, id) => ({ 
        ...state,
         loading: true,
         id: id 
    })),

    on(uploadUserSuccess, (state, {user}) => ({ 
        ...state, 
        loading: false,
        loaded: true,
        user: {...user}
    })),

    on(uploadUserError, (state, {payload}) => ({ 
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

