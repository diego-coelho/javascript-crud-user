import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserType } from 'src/app/model/models';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  type: UserType[] = [];
  userFormGroup: FormGroup;
  id: string | undefined | null;

  public users: User[] = [];
  constructor(private userService: UserService,
    private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.userFormGroup = this.fb.group({
      nickname: ['', Validators.required],
      name: ['', Validators.required],
      phone: ['', Validators.required],
      email: ['', Validators.required],
      user_type: ['', Validators.required],
      active: [true, Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id && this.id != 'undefined') {
      this.userService.get(this.id).subscribe((data: User) => {
        this.userFormGroup = this.fb.group({
          nickname: [data.nickname, Validators.required],
          name: [data.name, Validators.required],
          phone: [data.phone, Validators.required],
          email: [data.email, Validators.required],
          user_type: [data.user_type.id, Validators.required],
          active: [true, Validators.required]
        });
      });
    }
    console.log(this.id);

  }

  ngOnInit(): void {
    this.userTypeService.getAll().subscribe(data => this.type = data);
  }

  onSubmit() {
    if (this.userFormGroup.valid) {
      if (this.id && this.id != 'undefined') {
        this.userService.patch(this.id, this.userFormGroup.value).subscribe(() => this.router.navigate([`/users`]));
      } else {
        this.userService.add(this.userFormGroup.value).subscribe(() => this.router.navigate([`/user`]));
      }
    }
  }

}
