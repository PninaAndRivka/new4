import { Component, OnInit } from '@angular/core';
import { AppreService } from '../services/appre.service';

@Component({
  selector: 'app-show-result',
  templateUrl: './show-result.component.html',
  styleUrls: ['./show-result.component.scss']
})
export class ShowResultComponent implements OnInit {

  constructor(private Appreservice:AppreService) { }

  ngOnInit(): void {
  }
  result:any;
 public clickToResult()
 {
   
  this.result=this.Appreservice.getCount();
 }
}
