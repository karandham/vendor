import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrdersComponent } from './pages/orders.component';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';

const routes: Routes = [
  {
    path: '',
    component: OrdersComponent,
    children: [
      {
        path: '',
        redirectTo: 'all-orders', // Redirect to 'all-orders' without repeating 'orders'
        pathMatch: 'full',
      },
      {
        path: 'all-orders',
        component: AllOrdersComponent,
      },
      {
        path: 'add-orders',
        component: AddOrdersComponent,
      },
    ],
  },
  { path: '', redirectTo: '', pathMatch: 'full' }, // Redirect root to 'orders'
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OrdersRoutingModule {}
