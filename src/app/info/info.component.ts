import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  public e1=document.getElementById('e1');
  public e2=document.getElementById('e2');

  constructor() { }

  ngOnInit() {
  }

  clicked(e){
    console.log(this.e1);
    console.log(this.e2);
    if(e==='e1')
      this.e1.style.color="red";
    else
      this.e2.style.color="red";
  }

}
