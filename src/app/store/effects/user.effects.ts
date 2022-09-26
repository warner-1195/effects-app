import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map, catchError } from 'rxjs/operators';

import * as usersActions from '../actions';

import { UserService } from '../../services/user.service';
import { of } from "rxjs";




@Injectable()
export class UserEffects{

    constructor(
        private actions$ : Actions,
        private userService: UserService
    ){}

    uploadUser$ = createEffect(
        () => this.actions$.pipe(
            ofType( usersActions.uploadUser),
            mergeMap( 
                ({id}) => this.userService.getUsersById(id)
                .pipe( 
                    map(user => usersActions.uploadUserSuccess({user: user})),
                    catchError( err => of(usersActions.uploadUserError({payload: err}) ))

                 )
            )
        )
    );
}