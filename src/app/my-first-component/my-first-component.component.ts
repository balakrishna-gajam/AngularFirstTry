import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-first-component',
  templateUrl: './my-first-component.component.html',
  styleUrls: ['./my-first-component.component.scss']
})
export class MyFirstComponentComponent implements OnInit {

  constructor() { }
  myName : string = 'GB Krishna';
  testId : string = "myTestId";
  sampleDivContent = "";
  i =1;
  arr =[1,2,3,4,5];

  classTrue : boolean = true; 

  styleProps = {
    color : "red",
    size : 10
  }

  //const departName : string = '';

  ngOnInit() {
  }

  public methodName(nameLocal : string) : string {
    localStorage.setItem('n', nameLocal);
    let str : string = `welcom.... ${nameLocal}.... ${localStorage.getItem('n')}..\n ${this.myName+'its ok'}`;
    return str;
  }

  public msg = (m : string) =>{

  }

  public m1 (e) {
    console.log('on click method' );
    console.log(e);
    this.sampleDivContent = "its content";
  }

  public inputMethod (tag) {
    console.log(tag);
    
  }


}
