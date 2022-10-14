import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  o_email="admin@mail.com";
  o_password = '333';
  invalid= true;
  constructor(private route:Router) {
    
  }

  ngOnInit(): void {
    
  }
  emailFC = new FormControl('',[Validators.email,Validators.required]);
  passwordFC = new FormControl('',[Validators.required]);
  val_credentials(email:string,password:string){
    if(email==this.o_email && password == this.o_password){
      alert('You are verified');
      this.route.navigate(['/climate']);
    }
    else{
      this.invalid = false;
      setTimeout(() => {
        this.invalid = true;
      }, 5000);
    }
  }
}
