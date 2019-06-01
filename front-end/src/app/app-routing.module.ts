import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from './auth.guard';

const routes: Routes = [  
  { path: '', redirectTo: 'forum', pathMatch: 'full' },
  { path: 'login', loadChildren: './login/login.module#LoginModule' },
  { path: 'forum', loadChildren: './forum/forum.module#ForumModule', canActivate: [AuthGuard] },
  { path: '**',  redirectTo: 'forum' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
