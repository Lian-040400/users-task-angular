import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from "../../interfaces/interface";
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
      this.users =users;
    });
  }

}
