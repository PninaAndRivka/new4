import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-apprentices',
  templateUrl: './apprentices.component.html',
  styleUrls: ['./apprentices.component.scss']
})
export class ApprenticesComponent implements OnInit {

  url:string;
  constructor(private router:Router) { 
    this.url=this.router.url
  }
  
  f(route:string)
  {
   return this.router.url===route;
   
  }
  ngOnInit(): void {
  }

}
