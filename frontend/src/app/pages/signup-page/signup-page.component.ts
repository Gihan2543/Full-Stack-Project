import { HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})

export class SignupPageComponent implements OnInit {

  constructor( private authSevice: AuthService) { }

  ngOnInit() {

  }

onSignupButtonClicked(email: string, password: string) {
  this.authSevice.signup(email,password).subscribe((res: HttpResponse<any>) => {
    console.log(res);
  });
}
    

}
