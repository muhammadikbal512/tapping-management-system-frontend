import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import { ChannelTableService } from 'src/app/modules/services/module-services/channel-table.service';
import { Store } from '@ngxs/store';


@Component({
  selector: 'app-channel',
  templateUrl: './channel.component.html',
  styleUrls: ['./channel.component.css'],
})
export class ChannelComponent implements OnInit, AfterViewInit {
  constructor(
    public dialog: MatDialog,
    private store: Store,
    public channelService: ChannelService,
    public channelTableService: ChannelTableService
  ) {}
  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }


  ngOnInit(): void {}

  openDialog() {
    this.channelService.buttonStatus = 'create';
    this.channelService.openDialog();
  }

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.channelTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  onFilterTextBoxChanged() {
    this.channelTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.channelService.getAllChannelWithDelay();
  }
}
