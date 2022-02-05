import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  showMe=false;

  f()
  {
    this.showMe=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
