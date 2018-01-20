import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';

@Component({
  selector: 'app-template-login-form',
  templateUrl: './template-login-form.component.html',
  styleUrls: ['./template-login-form.component.css']  
})
export class TemplateLoginFormComponent implements OnInit {

  user: User

  constructor() { }

  ngOnInit() {
    this.user = new User();
  }

  login(values: any) {
    console.log(`User data: ${JSON.stringify(values)}`);
    // console.log(`User data: ${JSON.stringify(this.user)}`);
  }

  reset(form: any) {
    form.reset();
  }

}
