import { Component, OnInit, OnDestroy } from '@angular/core';
import { GridReadyEvent, RowClassRules, RowClickedEvent } from 'ag-grid-community';
import { ChannelTableService } from 'src/app/modules/services/module-services/channel-table.service';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import {Store} from "@ngxs/store";

@Component({
  selector: 'app-channel-table',
  templateUrl: './channel-table.component.html',
  styleUrls: ['./channel-table.component.css'],
})
export class ChannelTableComponent implements OnInit, OnDestroy {
  paginationSize: number = 5; 
  cols!: any[];
  constructor(
    private store: Store,
    private channelTableService: ChannelTableService,
    private channelService: ChannelService
  ) {}

  ngOnInit(): void {
    this.cols = [
      { field: 'channeld', header: 'Channel Id' },
      { field: 'channeType', header: 'Channel Type' },
      { field: 'ipAdsress', header: 'IP Address' },
      { field: 'port', header: 'Port' },
      { field: 'channeStatus', header: 'Channel Status' },
      { field: 'isOnPremise', header: 'Is On Preise' },
    ]
  }



  showDialog() {
    this.channelService.openDialog();
    this.channelService.buttonStatus = 'create';
  }

  onRowSelect(event: any) {
    this.channelService.ExistingData = event.data
    console.log(event.data)
  }

  public RowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0
    }
  }

  ngOnDestroy(): void {
    this.channelTableService.gridApi.destroy();
    this.channelService.channelList.length = 0;
  }

  onGridReady(params: GridReadyEvent) {
    this.channelTableService.gridApi = params.api;
    this.channelTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    this.channelService.ExistingData = data.data;
  }

  runService() {
    this.channelTableService.showTableLoading();
    this.channelService.getAllChannelWithDelay();
  }

  get animateRow() {
    return this.channelTableService.animateRow;
  }

  get columnDefs() {
    return this.channelTableService.columnDefs;
  }

  get defaultColDef() {
    return this.channelTableService.defaultColDef;
  }

  get rowHeight() {
    return this.channelTableService.rowHeight;
  }

  get headerHeight() {
    return this.channelTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.channelTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.channelTableService.frameworkComponents;
  }
}
