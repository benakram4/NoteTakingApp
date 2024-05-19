import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteDetailComponentComponent } from './note-detail-component/note-detail-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';

const routes: Routes = [
  {path: '', component: NoteDetailComponentComponent},
  {path: 'auth', redirectTo: 'auth/login', pathMatch: 'full'},
  {path: 'auth', children: [
    {path: 'login', component: LoginComponentComponent},
    {path: 'signup', component: SignupComponentComponent}
  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
