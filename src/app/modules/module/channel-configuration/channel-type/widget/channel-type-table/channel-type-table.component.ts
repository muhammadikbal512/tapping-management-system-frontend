import { Component, OnInit } from '@angular/core';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-configuration/channel-type.service';
import { ChannelTypeTableService } from 'src/app/modules/services/module-services/channel-configuration/channel-type-table.service';

@Component({
  selector: 'app-channel-type-table',
  templateUrl: './channel-type-table.component.html',
  styleUrls: ['./channel-type-table.component.css'],
})
export class ChannelTypeTableComponent implements OnInit {
  constructor(
    private channelTypeService: ChannelTypeService,
    private channelTypeTableService: ChannelTypeTableService
  ) {}

  ngOnInit(): void {
    this.getAllChannelTypes();
  }

  getAllChannelTypes() {
    this.channelTypeService.onGetAllChannelType();
  }

  showDialog() {
    this.channelTypeService.openDialog();
    this.channelTypeService.buttonStatus = 'create';
  }

  refreshTable() {
    this.channelTypeTableService.loading = true;
    this.channelTypeService.getAllChannelType();
  }

  onRowSelect(event: any) {
    this.channelTypeService.ExistingData = event.data;
    console.log(event.data);
  }

  get cols() {
    return this.channelTypeTableService.cols;
  }

  get loading() {
    return this.channelTypeTableService.loading;
  }

  get channelTypes() {
    return this.channelTypeTableService.channelTypes;
  }
}
