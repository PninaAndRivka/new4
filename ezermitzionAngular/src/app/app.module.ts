import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowResultComponent } from './show-result/show-result.component';
import {HttpClientModule} from '@angular/common/http';
import { HomeComponent } from './home/home.component';

import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { ApprenticesComponent } from './apprentices/apprentices.component';
import { VolunteersComponent } from './volunteers/volunteers.component';
import { ErrorComponent } from './error/error.component';
import { RouteModule } from './route/route.module';
import { VolunteersFormComponent } from './volunteers-form/volunteers-form.component';
import { ApprenticesFormComponent } from './apprentices-form/apprentices-form.component';
import { UserLogComponent } from './user-log/user-log.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { WebmasterComponent } from './webmaster/webmaster.component';
import { UsersManagementComponent } from './users-management/users-management.component';
import { EnteringInformationComponent } from './entering-information/entering-information.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowResultComponent,
    HomeComponent,
    NavigationBarComponent,
    ApprenticesComponent,
    VolunteersComponent,
    ErrorComponent,
    VolunteersFormComponent,
    ApprenticesFormComponent,
    UserLogComponent,
    ChangePasswordComponent,
    WebmasterComponent,
    UsersManagementComponent,
    EnteringInformationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouteModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
