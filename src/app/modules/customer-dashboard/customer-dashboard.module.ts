import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserComponent } from './components/add-user/add-user.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserCardComponent } from './components/user-card/user-card.component';

@NgModule({
  declarations: [
    AddUserComponent,
    HeaderComponent,
    UserDashboardComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserDashboardComponent,
  ]
})
export class CustomerDashboardModule { }
