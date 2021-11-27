import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  name = '';
  isHighlight = false;
  evenLength = {color : 'red', fontSize : '20px'}
  oddLength = {color : 'green', fontSize : '40px'}
  squareClass = {square : true}
  circleClass = {circle : true}

  constructor() { }

  ngOnInit(): void {
  }


}
