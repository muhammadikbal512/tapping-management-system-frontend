import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateIso8583FieldFormComponent } from './widget/create-update-iso8583-field-form/create-update-iso8583-field-form.component';

@Component({
  selector: 'app-iso8583-field-configuration',
  templateUrl: './iso8583-field-configuration.component.html',
  styleUrls: ['./iso8583-field-configuration.component.css']
})
export class Iso8583FieldConfigurationComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.dialog.open(CreateUpdateIso8583FieldFormComponent, {
      width: '600px'
    })
  }

}
