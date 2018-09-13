import { Component, OnInit } from '@angular/core';
import { User } from '../schemas/user-schema';

@Component({
  selector: 'app-autho-list',
  templateUrl: './autho-list.component.html',
  styleUrls: ['./autho-list.component.css']
})
export class AuthoListComponent implements OnInit {

  users: User [] = [
    { name: "Jordan",  picture: "" },
    { name: "Brandon", picture: "" },
    { name: "Robbie", picture: "" }
  ]

  constructor() { }

  ngOnInit() {
  }

}
