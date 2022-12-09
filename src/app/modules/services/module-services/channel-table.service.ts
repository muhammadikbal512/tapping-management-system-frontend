import { Injectable } from '@angular/core';
import { ChannelModel } from 'src/app/model/modules-model/channel.model';

@Injectable({
  providedIn: 'root'
})
export class ChannelTableService {
  channels!: ChannelModel[];
  loading: boolean = true;
  cols = [
    {field: 'channelId', header: 'Channel Id'},
    {field: 'ipAddress', header: 'Ip Address'},
    {field: 'port', header: 'Port'},
    {field: 'timeTrace', header: 'Timetrace'},
  ];

  constructor() { }

  setRowData(data: ChannelModel[]) {
    this.channels = data;
  }
  
}
