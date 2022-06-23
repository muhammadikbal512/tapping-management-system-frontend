import { Component, OnInit, AfterViewInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSelect, MatSelectChange } from '@angular/material/select';
import { Papa } from 'ngx-papaparse';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {
  maskHPAN,
  TransactionTableService,
} from '../../services/module-services/transaction-table.service';
import { TransactionService } from '../../services/module-services/transaction.service';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { additionalData } from './widget-transaction/table/table.component';

import {
  MatDialog,
  MatDialogRef,
  MAT_DIALOG_DATA,
} from '@angular/material/dialog';
import { FormsTransactionComponent } from './forms-transaction/forms-transaction.component';
@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css'],
})
export class TransactionComponent implements OnInit {
  

  constructor(
    
  ) {}

  ngOnInit(): void {
   
  }

  

  
}
