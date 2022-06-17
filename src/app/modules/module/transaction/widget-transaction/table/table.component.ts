import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';
import { MatTableDataSource } from '@angular/material/table';
import { FormControl } from '@angular/forms';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')
      ),
    ]),
  ],
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  amount = new FormControl('');
  countryCode = new FormControl('');
  destAccount = new FormControl('');
  hpan = new FormControl('');
  clearHPAN = new FormControl('');
  merchantId = new FormControl('');
  merchantType = new FormControl('');
  messageAscii = new FormControl('');
  messageHexa = new FormControl('');
  mti = new FormControl('');
  networkId = new FormControl('');
  posDataCode = new FormControl('');
  responseCode = new FormControl('');
  rrn = new FormControl('');
  sourceAccount = new FormControl('');
  terminalId = new FormControl('');
  trxDate = new FormControl('');
  transactionId = new FormControl('');
  transType = new FormControl('');
  filterValues = {
    amount: '',
    countryCode: '',
    destAccount: '',
    hpan: '',
    merchantId: '',
    merchantType: '',
    messageAscii: '',
    messageHexa: '',
    mti: '',
    networkId: '',
    posDataCode: '',
    responseCode: '',
    rrn: '',
    sourceAccount: '',
    terminalId: '',
    trxDate: '',
    transactionId: '',
    transType: '',
  };
  date = new Date();
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 20, 50, 100];
  resultsLength = 0;
  isLoading = true;
  rowData: TransactionMessageInterface[] = [];

  constructor(
    private transactionTableService: TransactionTableService,
    private transactionService: TransactionService
  ) {
    this.dataSource.filterPredicate = this.createFilter();
  }

  ngOnInit(): void {
    this.amount.valueChanges.subscribe((amount) => {
      this.filterValues.amount = amount;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.countryCode.valueChanges.subscribe((countryCode) => {
      this.filterValues.countryCode = countryCode;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.destAccount.valueChanges.subscribe((destAccount) => {
      this.filterValues.destAccount = destAccount;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.hpan.valueChanges.subscribe((hpan) => {
      this.filterValues.hpan = hpan;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.merchantId.valueChanges.subscribe((merchantId) => {
      this.filterValues.merchantId = merchantId;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.merchantType.valueChanges.subscribe((merchantType) => {
      this.filterValues.merchantType = merchantType;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.messageAscii.valueChanges.subscribe((messageAscii) => {
      this.filterValues.messageAscii = messageAscii;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.messageHexa.valueChanges.subscribe((messageHexa) => {
      this.filterValues.messageHexa = messageHexa;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.mti.valueChanges.subscribe((mti) => {
      this.filterValues.mti = mti;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.networkId.valueChanges.subscribe((networkId) => {
      this.filterValues.networkId = networkId;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.posDataCode.valueChanges.subscribe((posDataCode) => {
      this.filterValues.posDataCode = posDataCode;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.responseCode.valueChanges.subscribe((responseCode) => {
      this.filterValues.responseCode = responseCode;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.rrn.valueChanges.subscribe((rrn) => {
      this.filterValues.rrn = rrn;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.sourceAccount.valueChanges.subscribe((sourceAccount) => {
      this.filterValues.sourceAccount = sourceAccount;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.terminalId.valueChanges.subscribe((terminalId) => {
      this.filterValues.terminalId = terminalId;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.trxDate.valueChanges.subscribe((trxDate) => {
      this.filterValues.trxDate = trxDate;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.transactionId.valueChanges.subscribe((transactionId) => {
      this.filterValues.transactionId = transactionId;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.transType.valueChanges.subscribe((transType) => {
      this.filterValues.transType = transType;
      this.dataSource.filter = JSON.stringify(this.filterValues);
    });
    this.allTransaction();
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (
      data: {
        amount: string;
        countryCode: {toString: ()=> string; };
        destAccount: string;
        hpan: string;
        merchantId: { toString: () => string; };
        merchantType: string;
        messageAscii: string;
        messageHexa: string;
        mti: string;
        networkId: { toString: () => string; };
        posDataCode: {toString: ()=> string; };
        responseCode: string;
        rrn: string;
        sourceAccount: string;
        terminalId: { toString: () => string; };
        trxDate: string;
        transactionId: { toString: () => string; };
        transType: string;
      },
      filter: string
    ): boolean {
      let searchTerms = JSON.parse(filter);
      return data.amount.toLowerCase().indexOf(searchTerms.amount) !== -1 
      && data.countryCode.toString().toLowerCase().indexOf(searchTerms.countryCode) !== -1
      && data.destAccount.toLowerCase().indexOf(searchTerms.destAccount) !== -1
      && data.hpan.toLowerCase().indexOf(searchTerms.hpan) !== -1
      && data.merchantId.toString().toLowerCase().indexOf(searchTerms.merchantId) !== -1
      && data.merchantType.toLowerCase().indexOf(searchTerms.merchantType) !== -1
      && data.messageAscii.toLowerCase().indexOf(searchTerms.messageAscii) !== -1
      && data.messageHexa.toLowerCase().indexOf(searchTerms.messageHexa) !== -1
      && data.mti.toLowerCase().indexOf(searchTerms.mti) !== -1
      && data.networkId.toString().toLowerCase().indexOf(searchTerms.networkId) !== -1
      && data.posDataCode.toString().toLowerCase().indexOf(searchTerms.posDataCode) !== -1
      && data.responseCode.toLowerCase().indexOf(searchTerms.responseCode) !== -1
      && data.rrn.toLowerCase().indexOf(searchTerms.rrn) !== -1
      && data.sourceAccount.toLowerCase().indexOf(searchTerms.sourceAccount) !== -1
      && data.terminalId.toString().toLowerCase().indexOf(searchTerms.terminalId) !== -1
      // && data.trxDate.toLowerCase().indexOf(searchTerms.trxDate) !== -1
      && data.transactionId.toString().toLowerCase().indexOf(searchTerms.transactionId) !== -1
      && data.transType.toLowerCase().indexOf(searchTerms.transType) !== -1
      
    };
    return filterFunction;
  }

  ELEMENT_DATA: TransactionMessageInterface[] = [];
  columnsToDisplay = [
    'action',
    'amount',
    'countryCode',
    'destAccount',
    'HPAN',
    'merchantId',
    'merchantType',
    'messageAscii',
    'messageHexa',
    'MTI',
    'networkId',
    'posDataCode',
    'responseCode',
    'rrn',
    'sourceAccount',
    'terminalId',
    'trxDate',
    'transactionId',
    'transType',
  ];
  expandedElement = [];
  dataSource = new MatTableDataSource<TransactionMessageInterface>(
    this.ELEMENT_DATA
  );

  allTransaction() {
    this.transactionService.getAllTransactionList().subscribe((response) => {
      this.dataSource.data = response as any;
      this.isLoading = false;
      this.resultsLength = response.length;
      console.log('table', this.dataSource.data);
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.transactionTableService.gridApi.destroy();
  }
}

export let additionalData: TransactionMessageInterface;
