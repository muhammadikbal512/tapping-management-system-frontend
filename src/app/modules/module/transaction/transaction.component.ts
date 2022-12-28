import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { Papa } from 'ngx-papaparse';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionTableService } from '../../services/module-services/transaction/transaction-table.service';
import { TransactionService } from '../../services/module-services/transaction/transaction.service';
import { MatDialog } from '@angular/material/dialog';
import { FormsTransactionComponent } from './forms-transaction/forms-transaction.component';
import { TransactionNetworkTableService } from '../../services/module-services/transaction-network-table.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  @ViewChild('dateTransaction') dateOfTransaction!: any;
  rangeDates!: Date[];
  constructor(
    private papa: Papa,
    public transactionTableService: TransactionTableService,
    public transactionApiService: TransactionService,
    private dialog: MatDialog,
    public transactionNetwork: TransactionNetworkTableService
  ) {}

  ngOnInit(): void {
    
  }

  ngAfterViewInit(): void {
   
  }

  //Export excel button
  
}
