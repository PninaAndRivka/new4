import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.scss']
})
export class NavigationBarComponent implements OnInit {

  url:string;
  constructor(private router:Router) { 
    this.url=this.router.url;
  }
  ngOnInit(): void {
  }
  f(route:string)
  {
   return this.router.url===route;
   
  }
}
