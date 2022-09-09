import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import { ChannelTypeTableService } from 'src/app/modules/services/module-services/channel-type-table.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-channel-type',
  templateUrl: './channel-type.component.html',
  styleUrls: ['./channel-type.component.css'],
})
export class ChannelTypeComponent implements OnInit, AfterViewInit {
  constructor(
    private dialog: MatDialog,
    private channelTypeService: ChannelTypeService, private channelTypeTableService: ChannelTypeTableService
  ) {}
  
  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  refreshTable() {
    this.channelTypeService.getAllChannelTypeWithDelay();
  }

  onFilterTextBoxChanged() {
    this.channelTypeTableService.onFilter('search-filter')
  }

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.channelTypeTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  openDialog() {
    this.channelTypeService.buttonStatus = 'create';
    this.channelTypeService.openDialog();
  }
}
