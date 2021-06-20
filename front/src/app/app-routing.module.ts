import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserTypeComponent } from './page/user-type/user-type.component';
import { UserTypesComponent } from './page/user-types/user-types.component';
import { UserComponent } from './page/user/user.component';
import { UsersComponent } from './page/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  { path: 'users', component: UsersComponent },
  { path: 'user/:id', component: UserComponent },
  { path: 'userTypes', component: UserTypesComponent },
  { path: 'userType/:id', component: UserTypeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
