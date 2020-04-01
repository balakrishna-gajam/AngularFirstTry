import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  //properties
  countVariable : number = 0;
  countLimit : number = 1;
  userName : string = "GBKrishna";

  //constructor
  constructor() { }


  ngOnInit(): void {
  }

  //developer defined methods
  clickCountIncrease(){
    this.countVariable +=1;
  }

  clickCountDecrease(){
    this.countVariable -=1;
  }

  //method for multiple classes
  setMultiClasses(){
    let multiClasses = {
      diVClassName : this.countVariable >= this.countLimit,
      diVClassName2 : this.countVariable < this.countLimit
    }
    return multiClasses;
  }

}
