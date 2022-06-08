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
  filterValues = {
    amount: '',
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
    this.allTransaction();
  }

  createFilter(): (data: any, filter: string) => boolean {
    let filterFunction = function (
      data: { amount: string },
      filter: string
    ): boolean {
      let searchTerms = JSON.parse(filter);
      return data.amount.toLowerCase().indexOf(searchTerms.amount) !== -1;
    };
    return filterFunction;
  }

  ELEMENT_DATA: TransactionMessageInterface[] = [];
  columnsToDisplay = [
    'action',
    'amount',
    'currencyCode',
    'destAccount',
    'HPAN',
    'clearHPAN',
    'merchantId',
    'merchantType',
    'MTI',
    'networkDate',
    'networkId',
    'responseCode',
    'RRN',
    'srcAccount',
    'terminalId',
    'transactionDate',
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
