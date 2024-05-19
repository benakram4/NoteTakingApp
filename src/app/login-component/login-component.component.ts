import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { Subscription} from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  templateUrl: './login-component.component.html',
  styleUrl: './login-component.component.css'
})
export class LoginComponentComponent {

  error: string = '';
  isLoading = false;
  authSub!: Subscription;

  constructor(private authService: AuthServiceService, private router: Router) { }
  
  ngOnInit() {}

  onSubmit(form: NgForm) {
    
    if (!form.valid) {
      return;
    }
    
    this.isLoading = true;
    this.authSub = this.authService.login(form.value.email, form.value.password).subscribe({
      next: () => {
        console.log('Login successful!');
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
    this.authSub.unsubscribe();
  }
}
