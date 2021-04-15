import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() parentData ="";
  @Input('parentData') childProName  ="";
  
  @Output() public childEvent = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public fireEvent(){
    this.childEvent.emit("Hi..wel come to angular completely..")
  }

}
