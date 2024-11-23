import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { AuthenticationComponent } from './pages/authentication.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { SidebarComponent } from '../../comman/component/sidebar/sidebar.component';
import { HeaderComponent } from '../../comman/component/header/header.component';
import { FooterComponent } from '../../comman/component/footer/footer.component';


@NgModule({
  declarations: [LoginComponent,AuthenticationComponent,ForgotPasswordComponent],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class AuthenticationModule { }
