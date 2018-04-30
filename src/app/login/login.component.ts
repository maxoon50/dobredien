import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "../../services/server.service";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serverService: ServerService) {}
  failedAuthent = false;
  errorText;
  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.serverService.authenticate(form.value.pseudo, form.value.password).subscribe(
    (response) => {
       if(response['error']){
         this.errorText = "erreur login / mot de passe";
         this.failedAuthent = true;
       }else{
         this.failedAuthent = false;
         console.log(response);
       }
    },
    (error) => {
        this.failedAuthent = true;
        this.errorText = "erreur veuillez contacter l'administrateur";
    })
  }



}
