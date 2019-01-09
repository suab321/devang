import { Component, OnInit } from '@angular/core';
import {Md5} from 'ts-md5/dist/md5';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit() {

    document.addEventListener('contextmenu', event => event.preventDefault());


    var name=document.getElementById("name");
    var email=document.getElementById("email");
    var password=document.getElementById("password");
    var cpassword=document.getElementById("cpassword");

    name.onpaste=function(e){e.preventDefault()}
    email.onpaste=function(e){e.preventDefault()}
    password.onpaste=function(e){e.preventDefault()}
    cpassword.onpaste=function(e){e.preventDefault()}

    name.oncopy=function(e){e.preventDefault()}
    email.oncopy=function(e){e.preventDefault()}
    password.oncopy=function(e){e.preventDefault()}
    cpassword.oncopy=function(e){e.preventDefault()}

    name.oncut=function(e){e.preventDefault()}
    email.oncut=function(e){e.preventDefault()}
    password.oncut=function(e){e.preventDefault()}
    cpassword.oncut=function(e){e.preventDefault()}
  }

  submit(e){
    const hash=new Md5();
    console.log(hash.appendStr(e.value).end());

  }

}
