import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from "angular2-materialize";


import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainComponent } from './main/main.component';
import { UserListComponent } from './sidebar/user-list/user-list.component';
import { UserComponent } from './sidebar/user-list/user/user.component';
import {Routes} from "@angular/router";
import { LoginComponent } from './login/login.component';

const appRoutes: Routes = [
  { path: '/chat', component: AppComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    MainComponent,
    UserListComponent,
    UserComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
