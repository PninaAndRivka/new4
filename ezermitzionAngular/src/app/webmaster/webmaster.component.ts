import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-webmaster',
  templateUrl: './webmaster.component.html',
  styleUrls: ['./webmaster.component.scss']
})
export class WebmasterComponent implements OnInit {

  url:string;
  constructor(private router:Router) { 
    this.url=this.router.url;
  }
  ngOnInit(): void {
  }

}
