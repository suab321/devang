import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-header2',
  templateUrl: './main-header2.component.html',
  styleUrls: ['./main-header2.component.css']
})
export class MainHeader2Component implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }

  goto(e){
    this.router.navigateByUrl(e);
  }

}
