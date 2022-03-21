import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateIso8583DialectComponent } from './widget/create-update-iso8583-dialect/create-update-iso8583-dialect.component';


@Component({
  selector: 'app-iso8583-dialect',
  templateUrl: './iso8583-dialect.component.html',
  styleUrls: ['./iso8583-dialect.component.css']
})
export class Iso8583DialectComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso8583DialectComponent, {
      width: "600px"
    })
  }

}
