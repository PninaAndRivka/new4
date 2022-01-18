import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppreService {
  result:any;
  constructor(private _http: HttpClient) { }
  
  getCount()
  {
    
      this._http.get("/api/Appre").subscribe(res =>
        {
          
          console.log(res)
          this.result=res;
          debugger
        })

    return this.result;   
  }
}
