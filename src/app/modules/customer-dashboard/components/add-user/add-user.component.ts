import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {
  @Output() addUser = new EventEmitter();

  constructor(
    private usersService: UsersService,
    public dialog: MatDialog
  ) { }
  openDialog() {
    const dialogRef = this.dialog.open(ModalComponent);
    dialogRef.componentInstance.title = 'Add User';
    dialogRef.componentInstance.addUser.subscribe(userData => {
      this.usersService.addUsers(userData)
        .subscribe(newUser => {
          this.addUser.emit(newUser);
          dialogRef.close();
        });
    })
  }
}
