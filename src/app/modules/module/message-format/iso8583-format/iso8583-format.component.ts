import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngxs/store';
import { MessageFormatTableService } from 'src/app/modules/services/module-services/message-format-table.service';
import { MessageFormatService } from 'src/app/modules/services/module-services/message-format.service';

@Component({
  selector: 'app-iso8583-format',
  templateUrl: './iso8583-format.component.html',
  styleUrls: ['./iso8583-format.component.css'],
})
export class Iso8583FormatComponent implements OnInit, AfterViewInit {
  constructor(
    public dialog: MatDialog,
    private store: Store,
    public iso8583FormatService: MessageFormatService,
    public iso8583FormatTableService: MessageFormatTableService
  ) {}
  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;
    this.iso8583FormatTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';
    ag?.appendChild(document.querySelector('.page-size-container') as Node);
  }

  showDialog() {
    this.iso8583FormatService.buttonStatus = 'create';
    this.iso8583FormatService.openDialog();
  }

  onFilterTextBoxChanged() {
    this.iso8583FormatTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.iso8583FormatService.getAllIso8583FormatWithDelay();
  }
}
