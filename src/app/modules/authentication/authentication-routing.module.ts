import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication.component';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',  
    component: AuthenticationComponent,  
    children: [  
      {
        path: 'login',  
        component: LoginComponent 
      }
    ]
  },
  { path: 'login', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthenticationRoutingModule { }
