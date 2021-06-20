import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './page/users/users.component';
import { UserComponent } from './page/user/user.component';
import { UserTypeComponent } from './page/user-type/user-type.component';
import { UserTypesComponent } from './page/user-types/user-types.component';
import { MatTableModule } from '@angular/material/table';
import { MatCommonModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserTypeComponent,
    UserTypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCommonModule,
    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
