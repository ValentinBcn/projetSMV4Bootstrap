import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {AuthentificationService} from '../authentification.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor(private router: Router, private authentification: AuthentificationService) { }
  username: string;
  password: string;
  ngOnInit() {
  }



  myFunction(a,b){
   
    this.authentification.sendRequest(a,b).subscribe(res => {
      console.log(res);
      this.router.navigate(['list-boats']);
      console.log("le token est = ", res.json().token)
    },
    err => {
      alert("mauvais identifiants");
      console.log("Error occured");
    });
    
  }

}
