import { NgModule } from '@angular/core';
import { Routes, RouterModule, ChildActivationEnd } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyProfileComponent } from './my-profile/my-profile.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { ViewComponent } from './view/view.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:"", component: ViewComponent },
  { path:"home", component: HomeComponent },
  { path:"myprofile", component: MyProfileComponent },
  { path:"favorite", component: FavoriteComponent },
  { path:"signup", component: SignupComponent },
  { path:"login", component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
