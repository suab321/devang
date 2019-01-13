import { Component, OnInit } from '@angular/core';
import { InAppRleftComponent } from '../in-app-rleft/in-app-rleft.component';

@Component({
  selector: 'app-referal',
  templateUrl: './referal.component.html',
  styleUrls: ['./referal.component.css']
})
export class ReferalComponent implements OnInit {

  public hideglobalstate:boolean=false;
  public hideinvitestate:boolean=true;
  public hiderewardstate:boolean=true;
  public hidependingreward:boolean=true;
  public hideinviteform:boolean=false;

  constructor() { }

  ngOnInit() {
  }

  showglobalstate(){
    this.hideglobalstate=false;
    this.hideinvitestate=true;
    this.hiderewardstate=true;
    this.hidependingreward=true;
    this.hideinviteform=false;
    
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
    this.hidependingreward=false;
    this.hideinviteform=true;
  }
}
