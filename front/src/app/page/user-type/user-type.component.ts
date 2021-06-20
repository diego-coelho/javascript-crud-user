import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { User, UserType } from 'src/app/model/models';
import { UserTypeService } from 'src/app/services/user-type.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-type',
  templateUrl: './user-type.component.html',
  styleUrls: ['./user-type.component.scss']
})
export class UserTypeComponent implements OnInit {

  type: UserType[] = [];
  userTypeFormGroup: FormGroup;
  id: string | undefined | null;

  public users: User[] = [];
  constructor(private userTypeService: UserTypeService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder) {
    this.userTypeFormGroup = this.fb.group({
      description: ['', Validators.required],
      active: [true, Validators.required]
    });
    this.id = this.route.snapshot.paramMap.get('id');

    if (this.id && this.id != 'undefined') {
      this.userTypeService.get(this.id).subscribe((data: UserType) => {
        this.userTypeFormGroup = this.fb.group({
          description: [data.description, Validators.required],
          active: [true, Validators.required]
        });
      });
    }
    console.log(this.id);

  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.userTypeFormGroup.valid) {
      if (this.id && this.id != 'undefined') {
        this.userTypeService.patch(this.id, this.userTypeFormGroup.value).subscribe(() => this.router.navigate([`/userTypes`]));
      } else {
        this.userTypeService.add(this.userTypeFormGroup.value).subscribe(() => this.router.navigate([`/userTypes`]));
      }
    }
  }

}
