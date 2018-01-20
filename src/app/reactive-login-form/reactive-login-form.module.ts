import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveLoginFormComponent } from './reactive-login-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [ReactiveLoginFormComponent],
  exports: [ReactiveLoginFormComponent]
})
export class ReactiveLoginFormModule { }
