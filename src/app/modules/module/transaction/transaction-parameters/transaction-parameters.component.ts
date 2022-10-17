import {
  Component,
  OnInit,
  AfterContentInit,
  AfterViewInit,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionParametersTableService } from 'src/app/modules/services/module-services/transaction-parameters-table.service';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';

@Component({
  selector: 'app-transaction-parameters',
  templateUrl: './transaction-parameters.component.html',
  styleUrls: ['./transaction-parameters.component.css'],
})
export class TransactionParametersComponent implements OnInit, AfterViewInit {
  constructor(
    public dialog: MatDialog,
    public transactionParametersService: TransactionParametersService,
    public transactionParametersTableService: TransactionParametersTableService
  ) {}

  ngAfterViewInit(): void {
    this.stylingAgFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = <HTMLInputElement>document.getElementById('page-size');

    this.transactionParametersTableService.gridApi.paginationSetPageSize(
      Number(value)
    );
  }

  stylingAgFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';

    ag.appendChild(document.querySelector('.page-size-container') as Node);
  }

  showDialog() {
    this.transactionParametersService.buttonStatus = 'create';
    this.transactionParametersService.openDialog();
  }

  onFilterTextBoxChange() {
    this.transactionParametersTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.transactionParametersService.getAllTransactionParametersWithDelay();
  }
}
