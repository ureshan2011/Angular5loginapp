import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from './../environments/environment';
import { AuthService } from './core/auth.service';
import { RouterModule, ActivatedRoute, Routes } from '@angular/router';
import { AppRoutingModule, routingComponents } from '../app/routing/routing.module';


import { AppComponent } from './app.component';
import { UserLoginComponent } from './users/user-login/user-login.component';
import { UserProfileComponent } from './users/user-profile/user-profile.component';


@NgModule({
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserProfileComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule,
    AppRoutingModule
  ],
  exports:[RouterModule],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
