import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step-integration',
  templateUrl: './step-integration.component.html',
  styleUrls: ['./step-integration.component.css']
})
export class StepIntegrationComponent implements OnInit {

  public tab=1;
  constructor() { }

  ngOnInit() {
  }
  info(){
    this.tab=1;
  }
  reward(){
    this.tab=2;
  }
  noti(){
    this.tab=4;
  }
  widget(){
    this.tab=3;
  }
  
  inte(){
    this.tab=5;
  }
  install(){
    
  }
  next(){
    if(this.tab<5)
    this.tab++;
  }
  prev(){
    if(this.tab>1)
    this.tab--;
  }

}
