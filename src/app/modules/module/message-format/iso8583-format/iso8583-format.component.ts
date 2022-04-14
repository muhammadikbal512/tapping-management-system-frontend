import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateDialogIso8583FormatTableComponent } from './widget/create-update-dialog-iso8583-format-table/create-update-dialog-iso8583-format-table.component';
import { Location } from '@angular/common';


@Component({
  selector: 'app-iso8583-format',
  templateUrl: './iso8583-format.component.html',
  styleUrls: ['./iso8583-format.component.css']
})
export class Iso8583FormatComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  refresh() {
    location.reload();
  }


  openDialog() {
    this.dialog.open(CreateUpdateDialogIso8583FormatTableComponent, {
      width: '500px'
    });
  }

}
