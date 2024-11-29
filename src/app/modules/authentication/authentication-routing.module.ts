import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './pages/authentication.component';
import { LoginComponent } from './pages/login/login.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: AuthenticationComponent,
//     children: [
//       {
//         path: 'login',
//         component: LoginComponent,
//       },
//     ],
//   },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];
const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full', // Redirect empty path to 'login'
      },
      {
        path: 'login',
        component: LoginComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
