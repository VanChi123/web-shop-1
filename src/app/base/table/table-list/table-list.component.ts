import { Component, OnInit } from '@angular/core';
import {SalesPerson} from "../../models/sales-person";

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styles: [`
    .high-light {background-color:green; color: ghostwhite}
    .high-red {background-color:darkred; color: ghostwhite}
  `]
})
export class TableListComponent implements OnInit {

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar", "anup.kumar@luv2code.com", 50000),
    new SalesPerson("John","Doe", "john.doe@luv2code.com", 40000),
    new SalesPerson("Claire","Murphy", "claire.murphy@luv2code.com", 90000),
    new SalesPerson("Mai","Truong", "mai.truong@luv2code.com", 60000),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
