import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-friendcommercemilestone',
  templateUrl: './friendcommercemilestone.component.html',
  styleUrls: ['./friendcommercemilestone.component.css']
})
export class FriendcommercemilestoneComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
  }
  goto(e){
    this.router.navigateByUrl(e)
  }

}
