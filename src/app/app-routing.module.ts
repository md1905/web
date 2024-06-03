import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { AuthGuardGuard } from "./services/helper/auth-guard.guard";
// import { SharedComponent } from "./components/layout/shared/shared.component";

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'convert' },
  { path: 'convert', loadChildren: () => import('./components/convert/convert.module').then(m => m.ConvertModule) },
  // { path: '', loadChildren: () => import('./components/auth/sign-in/sign-in.module').then(m => m.SignInModule) },
  // { path: 'signup', loadChildren: () => import('./components/auth/sign-up/sign-up.module').then(m => m.SignUpModule) },

  // { path: '', canActivate: [AuthGuardGuard], component: SharedComponent, 
  // children:[
  //   { 
  //     path: 'users', 
  //     loadChildren: () => import('./components/dashboard/user-list/user-list.module').then(m => m.UserListModule) 
  //   },
  //   // { 
  //   //   path: 'add/user/:id', 
  //   //   loadChildren: () => import('./components/dashboard/add-user/add-user.module').then(m => m.AddUserModule) 
  //   // },
  //   // { 
  //   //   path: 'view/user/:id', 
  //   //   loadChildren: () => import('./components/dashboard/view-user/view-user.module').then(m => m.ViewUserModule) 
  //   // }
  // ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
