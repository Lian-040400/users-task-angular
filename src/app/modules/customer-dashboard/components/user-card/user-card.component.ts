import { Component, OnInit,Input } from '@angular/core';
import { User } from "../../interfaces/interface";


@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  @Input() user!: User
  constructor() { }

  ngOnInit(): void {
  
  }


}
