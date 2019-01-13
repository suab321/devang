import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formstate-sharingstate',
  templateUrl: './formstate-sharingstate.component.html',
  styleUrls: ['./formstate-sharingstate.component.css']
})
export class FormstateSharingstateComponent implements OnInit {

  public hideformstate:boolean=false;
  public hidesharingstate:boolean=true;
  public hidelink:boolean=true;

  constructor() { }

  ngOnInit() {
  }

  showformstate(){
    this.hideformstate=false;
    this.hidesharingstate=true;
  }
  showsharingstate(){
    this.hideformstate=true;
    this.hidesharingstate=false;
  }
  enable(){
    if(this.hidelink)
      this.hidelink=false;
    else
      this.hidelink=true;
  }

}
