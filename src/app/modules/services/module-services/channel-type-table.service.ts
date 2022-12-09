import { Injectable } from '@angular/core';
import { ColDef, ColumnApi, GridApi, GridReadyEvent } from 'ag-grid-community';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { OverlayLoadingComponent } from '../../global-widget/overlay-loading/overlay-loading.component';
import { ActionButtonGroupChannelTypeComponent } from '../../module/channel-configuration/channel-type/widget/action-button-group-channel-type/action-button-group-channel-type.component';

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
