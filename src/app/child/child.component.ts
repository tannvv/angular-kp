import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Output() myClick = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  addCount(){
    this.myClick.emit(true);
  }
  subCount(){
    this.myClick.emit(false);
  }

}
