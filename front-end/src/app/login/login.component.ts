import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  error: string = null;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get username() { 
    return this.loginForm.get('username'); 
  }

  get password() { 
    return this.loginForm.get('password'); 
  }

  login() {

    this.utils.setAsTouched(this.loginForm);

    if (this.loginForm.invalid) {
      return;
    }
    
    this.loading = true;
    
    setTimeout(() => {
      this.loading = false;
      localStorage.setItem('isAuth', "true");
      localStorage.setItem('login', this.username.value);
      this.router.navigate(["/forum"]);
    }, 1000);
  }


}
