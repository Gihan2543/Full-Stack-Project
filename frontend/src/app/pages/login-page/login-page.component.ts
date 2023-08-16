import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from 'express';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})

export class LoginPageComponent implements OnInit {
  _router: any;

  constructor( private authSevice: AuthService, private router: Router ) { }

  ngOnInit() {

  }

onLoginButtonClicked(email: string, password: string) {
  this.authSevice.login(email,password).subscribe((res: HttpResponse<any>) => {

    if(res.status === 200) {
      this._router.navigate(['/lists']);
    }
    console.log(res);
  });
}
    

}
