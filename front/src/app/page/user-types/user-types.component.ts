import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserType } from 'src/app/model/models';
import { UserTypeService } from 'src/app/services/user-type.service';

@Component({
  selector: 'app-user-types',
  templateUrl: './user-types.component.html',
  styleUrls: ['./user-types.component.scss']
})
export class UserTypesComponent implements OnInit {

  public userTypes: UserType[] = [];

  displayedColumns: string[] = ['active', 'description', 'created', 'last update', 'options'];
  constructor(private userTypeService: UserTypeService, private router: Router) { }

  ngOnInit(): void {
    this.get();
  }

  get() {
    this.userTypeService.getAll().subscribe(data => this.userTypes = data);
  }

  edit(id?: string) {
    this.router.navigate([`/userType/${id}`]);
  }

  delete(id: string) {
    this.userTypeService.delete(id).subscribe(() => this.get());
  }

}
