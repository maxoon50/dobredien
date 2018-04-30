import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {ServerService} from "../../services/server.service";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private serverService: ServerService) {}

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    this.serverService.authenticate(form.value.pseudo, form.value.password).subscribe(
    (response) => {
       if(response['error']){
         console.log('il y a une erreur bb');
       }else{
         console.log('authentifié bb');
       }
    },
    (error) => {
       console.log(error);
    })
  }



}
