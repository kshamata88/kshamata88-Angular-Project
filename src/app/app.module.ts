import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuListComponent } from './menu-list/menu-list.component';
import { HttpClientModule } from '@angular/common/http';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MenuDetailComponent } from './menu-detail/menu-detail.component';
import {RouterModule, Routes } from '@angular/router';
import { MenuIdVerifyGuard } from './menu-id-verify.guard';
import { ReviewComponent } from './review/review.component';
import { StarComponent } from './star/star.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';
import { UserComponent } from './user/user.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';





const routes: Routes = [
  {path: 'menu', component: MenuListComponent, title: 'Menu'},
  {path: 'menu/:id',component: MenuDetailComponent, title: 'Menu Detail ',
  canActivate: [MenuIdVerifyGuard],
  children: [
    {
      path: 'reviews',
      component: ReviewComponent
    }
  ]
},
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
  declarations: [
    AppComponent,
    MenuListComponent,
    StarComponent,
    PageNotFoundComponent,
    MenuDetailComponent,
    ReviewComponent,
    UserComponent,
    RegisterComponent,
    LoginComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    MaterialModule,
    ReactiveFormsModule,
    AppRoutingModule,




  ],
 providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
