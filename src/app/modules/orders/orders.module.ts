import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { OrdersComponent } from './pages/orders.component';
import { SidebarComponent } from '../../comman/component/sidebar/sidebar.component';
import { HeaderComponent } from '../../comman/component/header/header.component';
import { FooterComponent } from '../../comman/component/footer/footer.component';

@NgModule({
  declarations: [AllOrdersComponent, AddOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class OrdersModule {
  constructor() {
    alert('hii');
  }
}
