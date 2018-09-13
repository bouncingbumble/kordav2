import { Component, OnInit, Input } from '@angular/core';
import { User } from '../../schemas/user-schema';

@Component({
  selector: 'app-autho',
  templateUrl: './autho.component.html',
  styleUrls: ['./autho.component.css']
})
export class AuthoComponent implements OnInit {

  @Input() user: User;
  constructor() { }

  ngOnInit() {
  }

}
