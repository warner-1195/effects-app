import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as usersActions from '../actions';
import { UserService } from '../../services/user.service';
import { of } from "rxjs";



@Injectable()
export class UsersEffects{

    constructor(
        private actions$ : Actions,
        private userService: UserService
    ){}

    uploadUsers$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.uploadUsers),
            mergeMap( 
                () => this.userService.getUsers()
                .pipe( 
                    map(users => usersActions.uploadUsersSuccess({users: users})),
                    catchError( err => of(usersActions.uploadUsersError({payload: err}) ))

                 )
            )
        )
    );
}