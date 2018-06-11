import {Component, HostListener, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "../../services/server.service";
import {Router} from '@angular/router';
import {ChatService} from '../../services/chatService';
import {AuthService} from '../../services/authService';
import {LocalStorageService} from '../../services/localStorageService';
import {UserListService} from '../../services/userListService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private serverService: ServerService,
              private router: Router,
              private socket: ChatService,
              private authService: AuthService,
              private localStorageService: LocalStorageService,
              private userListService: UserListService
  ) {}
  failedAuthent = false;
  errorText = '';

  ngOnInit() {
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/chat']);
      let wtoken = JSON.parse(this.localStorageService.getItem('currentUser'));
      this.socket.connect(wtoken['user']);
    }
  }

  onSubmit(form: NgForm) {
    this.serverService.authenticate(form.value.pseudo, form.value.password).subscribe(
    (response) => {
       if (response['error']) {
          this.errorText = "erreur login / mot de passe";
          this.failedAuthent = true;
       } else {
         /* -> on set le local storage
            -> on prévient le serveur via socket
             -> on refresh la liste en la prenant sur serveur, permettra au nouveau connecté de savoir qui est en ligne
          */
          this.failedAuthent = false;
          this.localStorageService.setItem('currentUser', { token: response['token'], user: response['user'] });
          this.socket.connect(response['user']);
          this.userListService.refreshList();
          this.router.navigate(['/chat']);

       }
    },
    (error) => {
        this.failedAuthent = true;
        this.errorText = "erreur veuillez contacter l'administrateur";
    });
  }

}
