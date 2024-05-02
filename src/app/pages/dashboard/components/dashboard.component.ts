import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/user-service.service';

@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashComponent implements OnInit{

  userName: string | null = '';

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.currentUser.subscribe(user => {
      this.userName = user;
      console.log(this.userName);
    });
  }
}
