import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private userSource = new BehaviorSubject<string| null>(null);
  currentUser = this.userSource.asObservable();

  constructor() { }

  changeUser(name: string) {
    this.userSource.next(name);
  }

  logout() {
    this.userSource.next(null);
  }
}