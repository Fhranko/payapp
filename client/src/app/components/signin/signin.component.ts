import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  user = {
    email:'',
    password:'',
  }

  signIn(){
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
