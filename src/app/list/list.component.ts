import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  
  jsonOfBeers : Object;

  constructor(private _httpService : HttpService
     ) { 
    
  }

  ngOnInit(): void {
    this._httpService.firstHttpServiceTest();

    this._httpService.getAllBeers().subscribe( responseData =>{
      this.jsonOfBeers = responseData;
      console.log(this.jsonOfBeers);
    });

  }

  

}
