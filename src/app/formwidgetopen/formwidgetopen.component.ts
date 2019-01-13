import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formwidgetopen',
  templateUrl: './formwidgetopen.component.html',
  styleUrls: ['./formwidgetopen.component.css']
})
export class FormwidgetopenComponent implements OnInit {

  public hideformstate:boolean=false;
  public hidesharingstate:boolean=true;

  constructor() { }

  ngOnInit() {
  }
  showsharingstate(){
    this.hidesharingstate=false;
    this.hideformstate=true;
  }
  showformstate(){
    this.hideformstate=false;
    this.hidesharingstate=true;
  }

}
