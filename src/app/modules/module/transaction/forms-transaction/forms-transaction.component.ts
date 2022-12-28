import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { TransactionService } from 'src/app/modules/services/module-services/transaction/transaction.service';


@Component({
  selector: 'app-forms-transaction',
  templateUrl: './forms-transaction.component.html',
  styleUrls: ['./forms-transaction.component.css']
})
export class FormsTransactionComponent implements OnInit {
  searchFilterForm!: FormGroup;
  @Input() form!: FormGroup;
  columnOption!: FormGroup;
  columnOptionValue: string[] = [];
  rowData: TransactionMessageInterface[] = []
  constructor(
    private dataFb: FormBuilder,
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
   
  }


}