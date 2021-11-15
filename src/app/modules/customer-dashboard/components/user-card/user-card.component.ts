import { Component, OnInit,Input, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { User } from '../../models/user.model';
import { ModalComponent } from '../modal/modal.component';


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent {
  @Input() user!: User
  @Output() deleteUser = new EventEmitter<User>();

  constructor(
    public dialog: MatDialog
  ) {}

  delete(){
    this.deleteUser.emit(this.user);
  }

  edit(): void {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.title = 'Edit User';
    dialogRef.componentInstance.editMode = true;
    dialogRef.afterOpened().subscribe(() => {
      dialogRef.componentInstance.form.patchValue(this.user);
    })
  }
}
