import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: TransactionMessageInterface[];
  displayedColumns: string[] = ['amount', 'currencyCode', 'destAccount', 'HPAN', 'clearHPAN', 'merchantId', 'merchantType', 'MTI', 'networkId', 'responseCode', 'RRN', 'srcAccount', 'terminalId', 'transactionId', 'transType']
  dataSource = new MatTableDataSource<TransactionMessageInterface>(this.ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort


  constructor(private transactionService: TransactionService) { }

  ngOnInit(): void {
    this.onGetAllTransactionList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  onGetAllTransactionList() {
    this.transactionService.getAllTransactionList().subscribe((response) => {
      this.dataSource.data = response
      console.log(this.dataSource.data)
    })
  }

}
