import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/model/models';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  public users: User[] = [];

  displayedColumns: string[] = ['active', 'nickname', 'name', 'phone', 'email', 'created', 'last update', 'options'];
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.userService.getAll().subscribe(data => this.users = data);
  }

  edit(id?: string) {
    this.router.navigate([`/user/${id}`]);
  }

  delete(id: string) {
    this.userService.delete(id).subscribe(() => this.get());
  }

}
