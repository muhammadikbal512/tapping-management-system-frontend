import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChannelTypeTableService } from 'src/app/modules/services/module-services/channel-type-table.service';
import { GridReadyEvent, RowClassRules, RowClickedEvent } from 'ag-grid-community';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';

@Component({
  selector: 'app-channel-type-table',
  templateUrl: './channel-type-table.component.html',
  styleUrls: ['./channel-type-table.component.css'],
})
export class ChannelTypeTableComponent implements OnInit, OnDestroy {
  paginationSize: number = 5;
  loading: boolean = true;
  cols!: any[];
  constructor(
    private channelTypeService: ChannelTypeService,
    private channelTypeTableService: ChannelTypeTableService
  ) {}

  ngOnInit(): void {
    this.cols =[
      { field: 'chaneltype', header: 'Chanel Type' },
      { field: 'massagetamplate', header: 'Masagae Tamplate' },
      { field: 'description', header: 'Description' },

    ]
  }


  showDialog() {
    this.channelTypeService.openDialog();
    this.channelTypeService.buttonStatus = 'create';
  }


  onRowSelect(event: any) {
    this.channelTypeService.ExistingData = event.data
    console.log(event.data)
  }


  public RowClassRules: RowClassRules = {
    'ag-bg-rowIndex': (params) => {
      return params.rowIndex % 2 == 0
    }
  }

  ngOnDestroy(): void {
    this.channelTypeTableService.destroyGrid();
    this.channelTypeService.dialectMsgTemplateList.length = 0;
  }

  onGridReady(params: GridReadyEvent) {
    this.channelTypeTableService.gridApi = params.api;
    this.channelTypeTableService.gridColumnApi = params.columnApi;
    this.runService();
  }

  onCellClicked(data: RowClickedEvent) {
    console.log(data)
    this.channelTypeService.ExistingData = data.data;
  }

  runService() {
    this.channelTypeTableService.showTableLoading();
    this.channelTypeService.getAllChannelTypeWithDelay();
  }

  get animateRow() {
    return this.channelTypeTableService.animateRow;
  }

  get columnDefs() {
    return this.channelTypeTableService.columnDefs;
  }

  get defaultColDef() {
    return this.channelTypeTableService.defaultColDef;
  }

  get rowHeight() {
    return this.channelTypeTableService.rowHeight;
  }

  get headerHeight() {
    return this.channelTypeTableService.headerHeight;
  }

  get overlayLoadingTemplate() {
    return this.channelTypeTableService.overlayLoadingTemplate;
  }

  get frameworkComponents() {
    return this.channelTypeTableService.frameworkComponents;
  }

  
}
