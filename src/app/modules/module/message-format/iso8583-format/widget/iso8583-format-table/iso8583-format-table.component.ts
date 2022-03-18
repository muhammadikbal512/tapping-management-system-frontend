import { Component, OnInit } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'app-iso8583-format-table',
  templateUrl: './iso8583-format-table.component.html',
  styleUrls: ['./iso8583-format-table.component.css'],
})
export class Iso8583FormatTableComponent implements OnInit {
  columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  constructor() {}

  ngOnInit(): void {}
}
