import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-signup-component',
  templateUrl: './signup-component.component.html',
  styleUrl: './signup-component.component.css'
})
export class SignupComponentComponent {

  signUpForm!: FormGroup;

  error: string = '';
  isLoading = false;
  authSub?: Subscription;

  constructor(private authService: AuthServiceService, private router: Router, private fb: FormBuilder) { }
  
  ngOnInit() {
    this.signUpForm = new FormGroup({
      'username': new FormControl(null, [Validators.required, Validators.minLength(4)]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required]),
      'confirmPassword': new FormControl(null, [Validators.required])
    })
  }

  onSubmit() {
    console.log(this.signUpForm.value);
    if (!this.signUpForm.valid) {
      return;
    }
    if(this.signUpForm.value.password !== this.signUpForm.value.confirmPassword){
      this.error = 'Passwords do not match!';
      return;
    }
    this.isLoading = true;
    this.authSub = this.authService.signup(this.signUpForm.value.username, this.signUpForm.value.email, this.signUpForm.value.password).subscribe({
      next: () => {
        console.log('Signup successful!');
        this.error = '';
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.error = err.message;
        this.isLoading = false;
      },
    })
  } 

  ngOnDestroy() {
    if(this.authSub){
      this.authSub.unsubscribe();
    }
  }

}
