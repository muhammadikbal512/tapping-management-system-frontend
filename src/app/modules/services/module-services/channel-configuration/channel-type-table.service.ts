import { Injectable } from '@angular/core';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelTypeTableService {
  channelTypes!: ChannelTypeModel[];
  loading: boolean = true;
  cols = [
    { field: 'channelType', header: 'Channel Type' },
    { field: 'description', header: 'Description' },
  ];

  constructor() {}

  setRowData(data: ChannelTypeModel[]) {
    this.channelTypes = data;
  }
}
