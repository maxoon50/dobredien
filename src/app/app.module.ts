import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";


import { AppComponent } from './app.component';
import { SidebarComponent } from './main/sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './main/sidebar/user-list/user-list.component';
import { UserComponent } from './main/sidebar/user-list/user/user.component';
import {RouterModule, Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { MessagesComponent } from './main/messages/messages.component';
import {FormsModule} from "@angular/forms";
import {ServerService} from "../services/server.service";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {InterceptorHttpService} from "../services/interceptorHttp.service";
import {AuthService} from "../services/authService";
import {JwtInterceptor} from "../services/JWTInterceptor";
import {ChatService} from '../services/chatService';
import {LocalStorageService} from '../services/localStorageService';
import {UserListService} from '../services/userListService';


const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'chat', component: MainComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    UserListComponent,
    UserComponent,
    LoginComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule
  ],
  providers: [
    ServerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorHttpService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptor,
      multi: true
    },
    AuthService,
    ChatService,
    LocalStorageService,
    UserListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
