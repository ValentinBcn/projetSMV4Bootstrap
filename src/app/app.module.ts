import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ListBoatsComponent } from './list-boats/list-boats.component';
import { SingleBoatComponent } from './single-boat/single-boat.component';
import { LoginFormComponent } from './login-form/login-form.component';

import { RouterModule, Routes} from '@angular/router';
import {AuthentificationService} from './authentification.service';
const appRoutes: Routes = [
  {
    path: '',
    component: LoginFormComponent
  },
  {
    path : 'list-boats',
    component: ListBoatsComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    ListBoatsComponent,
    SingleBoatComponent,
    LoginFormComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    HttpModule
  ],
  providers: [AuthentificationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
