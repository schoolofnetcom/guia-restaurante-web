import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PasswordComponent } from './components/password.component';
import { ProfileComponent } from './components/profile.component';
import { LoginComponent } from './components/login.component';
import { LogoutComponent } from './components/logout.component';

import { AuthService } from './services/auth.service';

const appRoutes: Routes = [
    { path: 'password', component: PasswordComponent },
    { path: 'profile', component: ProfileComponent },
    { path: 'login', component: LoginComponent },
    { path: 'logout', component: LogoutComponent },
  ];

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        PasswordComponent,
        ProfileComponent,
        LoginComponent,
        LogoutComponent
    ],
    providers: [AuthService]
})
export class UserModule {}