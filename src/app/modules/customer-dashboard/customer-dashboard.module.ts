import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from "@angular/common/http";

import { AddUserComponent } from './components/add-user/add-user.component';
import { HeaderComponent } from './components/header/header.component';
import { UserDashboardComponent } from './components/user-dashboard/user-dashboard.component';
import { UserCardComponent } from './components/user-card/user-card.component';
import { ModalComponent } from './components/modal/modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { DragDropModule } from "@angular/cdk/drag-drop";

@NgModule({
  declarations: [
    AddUserComponent,
    HeaderComponent,
    UserDashboardComponent,
    UserCardComponent,
    ModalComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatNativeDateModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    DragDropModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    UserDashboardComponent,
  ]
})
export class CustomerDashboardModule { }
