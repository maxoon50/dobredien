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
    this.serverService.getUser(form.value.pseudo).subscribe(
      (response) => {
        if(response['_password'] == form.value.password ) {
          console.log('oki');
        }else{
          console.log('pas oki');
        }
      }, (error) =>{
        return(error);
      });
  }



}
