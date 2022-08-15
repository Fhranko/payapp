import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';


import {SigninComponent} from './components/signin/signin.component'
import {SignupComponent} from './components/signup/signup.component'
import {MainComponent} from './components/main/main.component'

const routes: Routes = [  
  {
    path: 'signin',
    component: SigninComponent,
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'expenses',
    component: MainComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
