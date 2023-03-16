import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-base-home',
  template: `<router-outlet></router-outlet>`
})
export class BaseHomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
