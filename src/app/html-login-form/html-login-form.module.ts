import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HtmlLoginFormComponent } from './html-login-form.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HtmlLoginFormComponent],
  exports: [HtmlLoginFormComponent]
})
export class HtmlLoginFormModule { }
