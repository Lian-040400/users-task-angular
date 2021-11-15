import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/user.model';
import { UsersService } from "../../services/users.service";
@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {
  users: User[] = [];
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }

  addNewUser(newUser: User): void {
    this.users.push(newUser);
  }

  deleteUser(userToRemove: User): void {
    this.usersService.deleteUser(userToRemove.id)
      .subscribe(() => {
        this.users = this.users.filter(user => user.id !== userToRemove.id);
      })
  }
  editUser(editedUser:User):void{
    this.usersService.editUser(editedUser)
    .subscribe(() => {
      this.users = this.users.filter(user => user == editedUser);
    })
  }
}
