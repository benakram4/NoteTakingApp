import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';

// PrimeNG UI modules
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';

// components
import { AppComponent } from './app.component';
import { NotesListComponentComponent } from './notes-list-component/notes-list-component.component';
import { NoteDetailComponentComponent } from './note-detail-component/note-detail-component.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { SignupComponentComponent } from './signup-component/signup-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

@NgModule({
  declarations: [
    AppComponent,
    NotesListComponentComponent,
    NoteDetailComponentComponent,
    LoginComponentComponent,
    SignupComponentComponent,
    HeaderComponentComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ButtonModule,
    InputTextModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
