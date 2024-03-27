import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './conta/login/login.component';
import { AuthenticationComponent } from './layout/authentication/authentication.component';
import { AuthGuard } from './conta/shared/auth.guard';
import { CriarContaComponent } from './conta/criar-conta/criar-conta.component';
import { HomeComponent } from './layout/home/home.component';

const routes: Routes = [
  { 
    path:'',
    component:LoginComponent,
    children: [
      { path:'', component:HomeComponent } 
    ],
    canActivate: [AuthGuard]
  },
  {
    path:'', 
    component: AuthenticationComponent,
    children: [
      { path:'', redirectTo: 'login', pathMatch: 'full'},
      { path:'login', component: LoginComponent},
      { path:'criar-conta', component: CriarContaComponent},
      { path:'home', component: HomeComponent}
    ]
  }
];

  

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
