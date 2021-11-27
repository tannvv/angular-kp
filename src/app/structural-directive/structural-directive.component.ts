import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directive',
  templateUrl: './structural-directive.component.html',
  styleUrls: ['./structural-directive.component.css']
})
export class StructuralDirectiveComponent implements OnInit {
  arrSubject = ['ReactJS','Angular','Winform'];

  constructor() { }

  ngOnInit(): void {
  }

}
