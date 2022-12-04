import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import { MenuIdVerifyGuard } from './menu-id-verify.guard';
import { MenuListComponent } from './menu-list/menu-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegisterComponent } from './register/register.component';
import { ReviewComponent } from './review/review.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'menu', component:MenuListComponent, title: 'Menu'},
  {path: 'menu/:id',
  component: MenuDetailComponent,
  title:'Menu Detail',
  canActivate: [MenuIdVerifyGuard],
  children: [
    {
      path: 'reviews',
      component: ReviewComponent
    }
  ] },
  {path: 'users',component: UserComponent, title: 'User ',
children: [
  {
    path: 'register',
    component: RegisterComponent
  },
   {
      path: 'login',
      component: LoginComponent
    },
]
},
{path: '', redirectTo: 'users/register', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent},
  {path:'menu', component:UserComponent, title: 'User'},
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],

  exports: [
    RouterModule,


  ]
})
export class AppRoutingModule { }
