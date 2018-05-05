import {Component, HostListener, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "../../services/server.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  constructor(private serverService: ServerService,  private router: Router) {}
  failedAuthent = false;
  errorText = '';

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.serverService.authenticate(form.value.pseudo, form.value.password).subscribe(
    (response) => {
       if (response['error']) {
         this.errorText = "erreur login / mot de passe";
         this.failedAuthent = true;
       } else {
         this.failedAuthent = false;
         localStorage.setItem('currentUser', JSON.stringify({ token: response['token'], user: response['user'] }));
         this.serverService.getUser('maxoon').subscribe((response) => {
           console.log(response);
           this.router.navigate(['/chat']);
         });
       }
    },
    (error) => {
        this.failedAuthent = true;
        this.errorText = "erreur veuillez contacter l'administrateur";
    });
  }

}
