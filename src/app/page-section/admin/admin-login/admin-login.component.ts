import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginDetails } from './login-details.model';
import { AdminService } from '../admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  loginForm = new FormGroup({
    'username': new FormControl('', [Validators.required]),
    'password': new FormControl('', [Validators.required]),
  });
  loginFormData = new LoginDetails({
    username: '',
    password: ''
  });
  submitClicked = false;
  constructor(private adminService: AdminService) { }

  ngOnInit(): void {
  }

  validateAndPostForm() {
    this.submitClicked = true;
    if (this.loginForm.valid) {
      this.loginFormData = new LoginDetails(this.loginForm.value);
      this.adminService.login(this.loginFormData).subscribe((response: boolean) => {
        console.log(response);
      });
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  formControlHasError(fieldName: string, error: string) {
    if (this.loginForm.get(fieldName)?.errors) {
      return Object.keys(this.loginForm.get(fieldName)?.errors as any).indexOf(error) > -1 && this.loginForm.get(fieldName)?.touched;
    }
    return false;
  }
}
