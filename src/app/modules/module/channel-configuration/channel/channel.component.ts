import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import { ChannelTableService } from 'src/app/modules/services/module-services/channel-table.service';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit {
  constructor(
    public dialog: MatDialog,
    private store: Store,
    public channelService: ChannelService,
    public channelTableService: ChannelTableService
  ) {}


  ngOnInit(): void {}

  openDialog() {
    this.channelService.buttonStatus = 'create';
    this.channelService.openDialog();
  }

  onFilterTextBoxChanged() {
    this.channelTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.channelService.getAllChannelWithDelay();
  }
}
