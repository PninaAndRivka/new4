import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-user',
  templateUrl: './add-new-user.component.html',
  styleUrls: ['./add-new-user.component.scss']
})
export class AddNewUserComponent implements OnInit {

  showMe=false;

  f()
  {
    this.showMe=true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
