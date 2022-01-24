import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-volunteers',
  templateUrl: './volunteers.component.html',
  styleUrls: ['./volunteers.component.scss']
})
export class VolunteersComponent implements OnInit {

  url:string;
  constructor(private router:Router) { 
    this.url=this.router.url;
  }
  f(route:string)
  {
   return this.router.url===route;
   
  }
  ngOnInit(): void {
  }

}
