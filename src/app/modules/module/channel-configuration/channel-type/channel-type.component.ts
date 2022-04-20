import { Component, OnInit } from '@angular/core';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import { ChannelTypeTableService } from 'src/app/modules/services/module-services/channel-type-table.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-channel-type',
  templateUrl: './channel-type.component.html',
  styleUrls: ['./channel-type.component.css'],
})
export class ChannelTypeComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private channelTypeService: ChannelTypeService, private channelTypeTableService: ChannelTypeTableService
  ) {}

  ngOnInit(): void {}

  refreshTable() {
    this.channelTypeService.getAllChannelTypeWithDelay();
  }

  onFilterTextBoxChanged() {
    this.channelTypeTableService.onFilter('search-filter')
  }

  openDialog() {
    this.channelTypeService.buttonStatus = 'create';
    this.channelTypeService.openDialog();
  }
}
