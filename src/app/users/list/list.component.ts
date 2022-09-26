import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from 'src/app/models/user.model';
import { AppState } from '../../store/app.reducer';
import { uploadUsers } from '../../store/actions/users.actions';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: []
})
export class ListComponent implements OnInit {

  users: User[] = [];
  loading: boolean | any = false;
  error: any;

  constructor(private store : Store<AppState>) { }

  ngOnInit(): void {

    this.store.select('users')
        .subscribe( ({users, loading, error}) =>{
          this.users = users;
          this.loading = loading;
          this.error = error
        })

    this.store.dispatch(uploadUsers())

  }

}
