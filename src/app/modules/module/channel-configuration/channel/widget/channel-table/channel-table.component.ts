import { Component, OnInit } from '@angular/core';
import { ChannelTableService } from 'src/app/modules/services/module-services/channel-configuration/channel-table.service';
import { ChannelService } from 'src/app/modules/services/module-services/channel-configuration/channel.service';

@Component({
  selector: 'app-channel-table',
  templateUrl: './channel-table.component.html',
  styleUrls: ['./channel-table.component.css'],
})
export class ChannelTableComponent implements OnInit {
  constructor(
    private channelTableService: ChannelTableService,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.getAllChannels();
  }

  getAllChannels() {
    this.channelService.onGetAllChannel();
  }

  refreshTable() {
    this.channelTableService.loading = true;
    this.channelService.onGetAllChannel();
  }

  showDialog() {
    this.channelService.openDialog();
    this.channelService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.channelService.ExistingData = event.data;
    console.log(event.data);
  }

  get cols() {
    return this.channelTableService.cols;
  }

  get channels() {
    return this.channelTableService.channels;
  }

  get loading() {
    return this.channelTableService.loading;
  }
}
