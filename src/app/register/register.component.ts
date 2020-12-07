import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  fullname: string;
  email: string;
  password: string;
  confirmPassword: string;
  userGroup = new FormGroup({
    fullname : new FormControl('', [Validators.required]),
    email : new FormControl('', [Validators.required, Validators.email]),
    password : new FormControl('', [Validators.required]),
    confirmPassword : new FormControl('', [Validators.required, this.passwordMismatchCheck]),
  });
  constructor(private router: Router, private authService: AuthService) {
    console.log(this.userGroup);
  }

  ngOnInit(): void {
  }
  passwordMismatchCheck(control: FormControl): {invalid: boolean}{
    if (control.root.get('password') && control.root.get('confirmPassword')) {
      return control.root.get('password').value === control.root.get('confirmPassword').value ?
       null : { invalid: true };
    }
  // tslint:disable-next-line: align
  return null;
  }
  register(): void{
      const user = this.userGroup.getRawValue();
      this
      .authService
      .register(user)
      .subscribe((info) => {
        this.router.navigate(['']);
      });
  }

}
