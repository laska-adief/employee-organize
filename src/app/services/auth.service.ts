import { Injectable } from '@angular/core';

export type UserLogin = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}

  login(user: UserLogin) {
    const userAuth = JSON.stringify(user);
    localStorage.setItem('authEmployeeOrganize', userAuth);
  }
}
