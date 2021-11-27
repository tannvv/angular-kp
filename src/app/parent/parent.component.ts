import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  count = 0;
  constructor() { }

  ngOnInit(): void {
  }
  changeCount(isAdd : boolean){
    if (isAdd) {
      this.count = this.count + 1;
    }else
    {
      this.count = this.count - 1;
    }
  }

}
