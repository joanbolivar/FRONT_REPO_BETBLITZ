import { Component } from '@angular/core';
import { UserService } from '../../../services/user-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent {

  constructor(private _router: Router, private userSource: UserService) { }


logout() {
this.userSource.logout();
this._router.navigate(['/betbliz/home']);
}

}
