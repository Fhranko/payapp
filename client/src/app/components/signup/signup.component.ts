import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  user = {
    email:'',
    password:'',
  }

  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  signUp(){
    const _router = this.router
    
    
    this.authService.signUp(this.user).subscribe({
      next(response) {
        localStorage.setItem('token', response.token);
        _router.navigate(['/expenses'])
      },
      error(err){
        console.log(err)
      }
    })
  }

}
