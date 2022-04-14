import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateUpdateDialogChannelComponent } from './widget/create-update-dialog/create-update-dialog.component';
@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css']
})
export class ChannelComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  refresh() {
    location.reload();
  }

  

  openDialog() {
    this.dialog.open(CreateUpdateDialogChannelComponent, {
      width: '700px', height: '490px'
    })
  }

}
