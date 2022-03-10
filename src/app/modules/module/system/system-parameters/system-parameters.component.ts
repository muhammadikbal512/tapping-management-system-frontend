import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateDialogComponent } from './create-update-dialog/create-update-dialog.component';

@Component({
  selector: 'app-system-parameters',
  templateUrl: './system-parameters.component.html',
  styleUrls: ['./system-parameters.component.css']
})
export class SystemParametersComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CreateUpdateDialogComponent, {
      width: '500px',

    });
  }

}
