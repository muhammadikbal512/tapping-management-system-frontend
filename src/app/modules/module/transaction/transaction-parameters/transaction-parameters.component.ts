import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TransactionParametersTableService } from 'src/app/modules/services/module-services/transaction-parameters-table.service';
import { TransactionParametersService } from 'src/app/modules/services/module-services/transaction-parameters.service';



@Component({
  selector: 'app-transaction-parameters',
  templateUrl: './transaction-parameters.component.html',
  styleUrls: ['./transaction-parameters.component.css']
})
export class TransactionParametersComponent implements OnInit {

  constructor(
    public dialog: MatDialog,
    public transactionParametersService: TransactionParametersService,
    public transactionParametersTableService: TransactionParametersTableService
  ) { }

  ngOnInit(): void {
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
