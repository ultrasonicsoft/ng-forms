import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TemplateLoginFormComponent } from './template-login-form.component';
import { FormsModule } from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [TemplateLoginFormComponent],
  exports: [TemplateLoginFormComponent]
})
export class TemplateLoginFormModule { }
