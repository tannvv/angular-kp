import { Child2Component } from './../child2/child2.component';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {
  @ViewChild(Child2Component)
  myChild!: Child2Component;
  constructor() { }

  ngOnInit(): void {
  }
  changeValue(){
    this.myChild.count++;
  }

}
