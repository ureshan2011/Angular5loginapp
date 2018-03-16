import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthService } from '../core/auth.service';
import { UserLoginComponent } from '../users/user-login/user-login.component';
import { UserProfileComponent } from '../users/user-profile/user-profile.component';

const routes: Routes = [
    { path: 'profile', component: UserProfileComponent },
    { path: 'login', component: UserLoginComponent },
    { path: '**', component: UserLoginComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [UserLoginComponent, UserProfileComponent]