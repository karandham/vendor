import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-orders',
  standalone: false,
  templateUrl: './add-orders.component.html',
  styleUrl: './add-orders.component.scss',
})
export class AddOrdersComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(private _formBuilder: FormBuilder) {
    alert('hii');
  }
}
