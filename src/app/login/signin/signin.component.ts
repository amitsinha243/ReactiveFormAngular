import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private fb: FormBuilder) { }
  loginForm : FormGroup;
  ngOnInit() {
    this.loginForm = this.fb.group({
      username : new FormControl('', [Validators.required, Validators.minLength(6)]),
      password : new FormControl('', [Validators.required, Validators.minLength(6)])
    })
  }
  loginSubmit(value) {
    console.log(value);
  }

}
