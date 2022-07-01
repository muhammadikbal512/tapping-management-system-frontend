import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { TransactionMessageInterface } from 'src/app/interface/modules/transaction-message';
import { TransactionMessageModel } from 'src/app/model/modules-model/transaction-message-model';
import { maskHPAN ,TransactionTableService } from 'src/app/modules/services/module-services/transaction-table.service';
import { TransactionService } from 'src/app/modules/services/module-services/transaction.service';


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
    private transactionTableService: TransactionTableService,
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.searchFilterForm = this.dataFb.group({
      dateFrom: [null],
      dateTo: [null],
      MTI: [null],
      HPAN: [null],
      terminalId: [null],
      merchantId: [null],
      merchantType: [null],
      currencyCode: [null],
      amount: [null],
      responseCode: [null],
      transactionId: [null],
      networkId: [null],
      RRN: [null],
      srcAccount: [null],
      destAccount: [null],
    });

    this.columnOption = this.dataFb.group({
      column: [this.columnOptionValue]
    });

    this.transactionTableService.columnLists.forEach(x => {
      this.columnOptionValue.push(x.value);
    })
  }

  responseHandler(response: TransactionMessageModel[]) {
    let responseData: TransactionMessageInterface[] = [];
    if (response.length == 0) {
      this.transactionTableService.gridApi.showNoRowsOverlay();
    }
    response.forEach(x => {
      responseData.push({
        amount: x.amount,
        currencyCode: x.countryCode,
        location: x.location,
        messageAscii: x.messageAscii,
        messageHexa: x.messageHexa,
        posDataCode: x.posDataCode,
        sequenceNumber: x.sequenceNumber,
        destAccount: '',
        HPAN: maskHPAN(x.hpan, '*', 6, 4),
        clearHPAN: x.hpan,
        merchantId: x.merchantId,
        merchantType: x.merchantType,
        MTI: x.mti,
        networkDate: x.TrxDate,
        networkId: x.networkID,
        responseCode: x.responseCode,
        RRN: x.rrn,
        srcAccount: '',
        terminalId: x.terminalId,
        transactionDate: x.TrxDate,
        transactionId: x.transactionId,
        transType: x.transType
      });
      this.rowData = responseData;
      this.transactionTableService.gridApi.setRowData(responseData);
      this.transactionTableService.gridApi.hideOverlay();
    })
  }

  errorHandler(error: any) {
    console.log(error);
    this.transactionTableService.gridApi.showNoRowsOverlay();
  }

  searchButton() {
    let transactionMessageData = this.rowData;
    const valueMTI = String(this.searchFilterForm.controls['MTI'].value);
    const valueHPAN = String(this.searchFilterForm.controls['HPAN'].value);
    const valueTerminalId = String(this.searchFilterForm.controls['terminalId'].value);
    const valueMerchantId = String(this.searchFilterForm.controls['merchantId'].value);
    const valueMerchantType = String(this.searchFilterForm.controls['merchantType'].value);
    const valueCurrencyCode = String(this.searchFilterForm.controls['currencyCode'].value);
    const valueAmount = String(this.searchFilterForm.controls['amount'].value);
    const valueResponseCode = String(this.searchFilterForm.controls['responseCode'].value);
    const valueTransactionId = String(this.searchFilterForm.controls['transactionId'].value);
    const valueNetworkId = String(this.searchFilterForm.controls['networkId'].value);
    const valueRRN = String(this.searchFilterForm.controls['RRN'].value);
    const valueSrcAccount = String(this.searchFilterForm.controls['srcAccount'].value);
    const valueDestAccount = String(this.searchFilterForm.controls['destAccount'].value);

    this.transactionTableService.gridApi.showLoadingOverlay();

    if (this.searchFilterForm.controls['MTI'].value != null && this.searchFilterForm.controls['MTI'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.MTI == valueMTI
        }
      )
    }

    if (this.searchFilterForm.controls['HPAN'].value != null && this.searchFilterForm.controls['HPAN'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.clearHPAN == valueHPAN
        }
      )
    }

    if (this.searchFilterForm.controls['terminalId'].value != null && this.searchFilterForm.controls['terminalId'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.terminalId == valueTerminalId
        }
      )
    }

    if (this.searchFilterForm.controls['merchantId'].value != null && this.searchFilterForm.controls['merchantId'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.merchantId == valueMerchantId
        }
      )
    }

    if (this.searchFilterForm.controls['merchantType'].value != null && this.searchFilterForm.controls['merchantType'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.merchantType == valueMerchantType
        }
      )
    }

    if (this.searchFilterForm.controls['currencyCode'].value != null && this.searchFilterForm.controls['currencyCode'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.currencyCode == valueCurrencyCode
        }
      )
    }

    if (this.searchFilterForm.controls['amount'].value != null && this.searchFilterForm.controls['amount'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.amount == valueAmount
        }
      )
    }

    if (this.searchFilterForm.controls['responseCode'].value != null && this.searchFilterForm.controls['responseCode'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.responseCode == valueResponseCode
        }
      )
    }

    if (this.searchFilterForm.controls['transactionId'].value != null && this.searchFilterForm.controls['transactionId'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.transactionId == valueTransactionId
        }
      )
    }

    if (this.searchFilterForm.controls['networkId'].value != null && this.searchFilterForm.controls['networkId'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.networkId == valueNetworkId
        }
      )
    }

    if (this.searchFilterForm.controls['RRN'].value != null && this.searchFilterForm.controls['RRN'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.RRN == valueRRN
        }
      )
    }

    if (this.searchFilterForm.controls['srcAccount'].value != null && this.searchFilterForm.controls['srcAccount'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.srcAccount == valueSrcAccount
        }
      )
    }

    if (this.searchFilterForm.controls['destAccount'].value != null && this.searchFilterForm.controls['destAccount'].value != '') {
      transactionMessageData = transactionMessageData.filter(
        value => {
          return value.destAccount == valueDestAccount
        }
      )
    }

    //Update data Table by filter
    if (this.rowData.length != transactionMessageData.length) {
      this.transactionTableService.additionalData = undefined;
      setTimeout(() => {
        this.transactionTableService.gridApi.setRowData(transactionMessageData);
        this.transactionTableService.gridApi.hideOverlay();
      }, 700)
    }

    if (
      (this.searchFilterForm.controls['MTI'].value == null || this.searchFilterForm.controls['MTI'].value == '') &&
      (this.searchFilterForm.controls['HPAN'].value == null || this.searchFilterForm.controls['HPAN'].value == '') &&
      (this.searchFilterForm.controls['terminalId'].value == null || this.searchFilterForm.controls['terminalId'].value == '') &&
      (this.searchFilterForm.controls['merchantId'].value == null || this.searchFilterForm.controls['merchantId'].value == '') &&
      (this.searchFilterForm.controls['merchantType'].value == null || this.searchFilterForm.controls['merchantType'].value == '') &&
      (this.searchFilterForm.controls['currencyCode'].value == null || this.searchFilterForm.controls['currencyCode'].value == '') &&
      (this.searchFilterForm.controls['amount'].value == null || this.searchFilterForm.controls['amount'].value == '') &&
      (this.searchFilterForm.controls['responseCode'].value == null || this.searchFilterForm.controls['responseCode'].value == '') &&
      (this.searchFilterForm.controls['transactionId'].value == null || this.searchFilterForm.controls['transactionId'].value == '') &&
      (this.searchFilterForm.controls['networkId'].value == null || this.searchFilterForm.controls['networkId'].value == '') &&
      (this.searchFilterForm.controls['RRN'].value == null || this.searchFilterForm.controls['RRN'].value == '') &&
      (this.searchFilterForm.controls['srcAccount'].value == null || this.searchFilterForm.controls['srcAccount'].value == '') &&
      (this.searchFilterForm.controls['destAccount'].value == null || this.searchFilterForm.controls['destAccount'].value == '')
    ) {
      this.transactionTableService.additionalData = undefined;
      setTimeout(() => {
        this.transactionService.getAllTransactionList().subscribe({
          next: this.responseHandler.bind(this),
          error: this.errorHandler.bind(this)
        });
      }, 500)
    }
  }

  clearButton() {
    this.searchFilterForm.reset();
    this.transactionTableService.gridApi.showLoadingOverlay();
    this.transactionTableService.additionalData = undefined;
    if (this.rowData.length != 0) {
      setTimeout(() => {
        this.transactionTableService.gridApi.setRowData(this.rowData);
      }, 700);
    }
  }

}