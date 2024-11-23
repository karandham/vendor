import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { AllOrdersComponent } from './pages/all-orders/all-orders.component';
import { AddOrdersComponent } from './pages/add-orders/add-orders.component';
import { OrdersComponent } from './pages/orders.component';
import { SidebarComponent } from '../../comman/component/sidebar/sidebar.component';
import { HeaderComponent } from '../../comman/component/header/header.component';
import { FooterComponent } from '../../comman/component/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
@NgModule({
  declarations: [AllOrdersComponent, AddOrdersComponent, OrdersComponent],
  imports: [
    CommonModule,
    OrdersRoutingModule,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
})
export class OrdersModule {
  constructor() {
    alert('hii');
  }
}
