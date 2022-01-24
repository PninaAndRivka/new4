import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ErrorComponent } from '../error/error.component';
import { VolunteersComponent } from '../volunteers/volunteers.component';
import { ApprenticesComponent } from '../apprentices/apprentices.component';
import { VolunteersFormComponent } from '../volunteers-form/volunteers-form.component';
import { ApprenticesFormComponent } from '../apprentices-form/apprentices-form.component';
import { UserLogComponent } from '../user-log/user-log.component';
import { ChangePasswordComponent } from '../change-password/change-password.component';
import { UsersManagementComponent } from '../users-management/users-management.component';
import { EnteringInformationComponent } from '../entering-information/entering-information.component';
import { WebmasterComponent } from '../webmaster/webmaster.component';



const appRoutes:Routes=[
//{path:'', component:HomeComponent},
//{
//path:'NavigationBar', component:NavigationBarComponent,
//children:[{path:'Home', component:HomeComponent}]},
  {
   path:'Home', component:HomeComponent
  },
  {
  path:'Volunteers', component:VolunteersComponent,
  children:[  {
    path:'VolunteersForm', component:VolunteersFormComponent
  }]},
  {
    path:'Apprentices', component:ApprenticesComponent,
    children:[  {
      path:'ApprenticesForm', component:ApprenticesFormComponent
    }]},
    {
      path:'UserLog', component:UserLogComponent
    },
    {path:'changePassword', component: ChangePasswordComponent},
    {path:'UsersManagement', component: UsersManagementComponent},
    {path:'EnteringInformation', component: EnteringInformationComponent},
    {path:'Webmaster', component:WebmasterComponent}

//{path:'**', component:ErrorComponent}
]



@NgModule({
  declarations: [],
  imports: [ RouterModule.forRoot(appRoutes),
    CommonModule
  ],
  exports:[RouterModule]
})
export class RouteModule { }
