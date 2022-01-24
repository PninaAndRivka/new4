import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss']
})
export class UsersManagementComponent implements OnInit {

  url:string;
  constructor(private router:Router) { 
    this.url=this.router.url;
  }
  ngOnInit(): void {
  }

}
