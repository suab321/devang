import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loggedheader',
  templateUrl: './loggedheader.component.html',
  styleUrls: ['./loggedheader.component.css']
})
export class LoggedheaderComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goto(e){
    this.router.navigateByUrl(e);
  }

}
