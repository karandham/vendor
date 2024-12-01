import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isSignUpMode: boolean = false;

  toggleMode(isSignUp: boolean): void {
    this.isSignUpMode = isSignUp;
  }
}
