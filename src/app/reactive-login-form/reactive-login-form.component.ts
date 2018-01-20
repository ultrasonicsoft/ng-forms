import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { User } from '../user-model';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-login-form',
  templateUrl: './reactive-login-form.component.html',
  styleUrls: ['./reactive-login-form.component.css']
})
export class ReactiveLoginFormComponent implements OnInit {

  user : User;

  loginForm: FormGroup

  userName: FormControl;
  password: FormControl;

  constructor() {
    this.user = new User();

    this.userName = new FormControl('',[Validators.required, Validators.minLength(2)]);
    this.password = new FormControl('',[Validators.required]);

    this.loginForm = new FormGroup({
      'userName': this.userName,
      'password': this.password,
    });
  }

  ngOnInit() {
  }

  login(){
    console.log(`reactive form: ${JSON.stringify(this.loginForm.value)}`);
  }
}
