import { Component, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-in-app-rleft',
  templateUrl: './in-app-rleft.component.html',
  styleUrls: ['./in-app-rleft.component.css']
})
export class InAppRleftComponent implements OnInit {


  public hideglobalstate:boolean=false;
  public hideinvitestate:boolean=true;
  public hiderewardstate:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  showglobalstate(){
    this.hideglobalstate=false;
    this.hideinvitestate=true;
    this.hiderewardstate=true;
    
  }
  showinvitestate(){
    this.hideglobalstate=true;
    this.hideinvitestate=false;
    this.hiderewardstate=true;
    
  }
  showrewardstate(){
    this.hideglobalstate=true;
    this.hideinvitestate=true;
    this.hiderewardstate=false;
  
  }
}
