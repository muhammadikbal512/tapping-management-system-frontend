import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateDialogTypeComponent } from './widget/create-update-dialog-type/create-update-dialog-type.component';

@Component({
  selector: 'app-channel-type',
  templateUrl: './channel-type.component.html',
  styleUrls: ['./channel-type.component.css']
})
export class ChannelTypeComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  refresh() {
    location.reload();
  }

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value

    // this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log($event)
  }

  openDialog() {
    this.dialog.open(CreateUpdateDialogTypeComponent, {
      width: "700px", height: '350px'
    })
  }
}
