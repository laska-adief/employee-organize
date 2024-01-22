import { Injectable, inject } from '@angular/core';

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

  isLocalStorageSupported() {
    try {
      const testKey = '__testKey__';
      localStorage.setItem(testKey, testKey);
      localStorage.removeItem(testKey);
      return true;
    } catch (e) {
      return false;
    }
  }

  isLogin() {
    if (this.isLocalStorageSupported()) {
      const authLogin = localStorage.getItem('authEmployeeOrganize');
      return authLogin ? true : false;
    } else {
      return false;
    }
  }
}
