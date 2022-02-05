import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-change-user-name',
  templateUrl: './change-user-name.component.html',
  styleUrls: ['./change-user-name.component.scss']
})
export class ChangeUserNameComponent implements OnInit {
  
  showMe=false;

  f()
  {
    this.showMe=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
