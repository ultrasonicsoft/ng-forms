import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HtmlLoginFormModule } from './html-login-form/html-login-form.module';
import { TemplateLoginFormModule } from './template-login-form/template-login-form.module';
import { ReactiveLoginFormModule } from './reactive-login-form/reactive-login-form.module';


@NgModule({
  declarations: [
    AppComponent
    
  ],
  imports: [
    BrowserModule,
    HtmlLoginFormModule,
    TemplateLoginFormModule,
    ReactiveLoginFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
