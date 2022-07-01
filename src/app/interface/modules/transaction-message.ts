export interface TransactionMessageInterface {
  amount: string;
  currencyCode: string;
  location: string;
  messageAscii: string;
  messageHexa: string;
  posDataCode: string;
  sequenceNumber: number;
  destAccount: string;
  HPAN: string;
  clearHPAN: string;
  merchantId: string;
  merchantType: string;
  MTI: string;
  networkDate: string;
  networkId: string;
  responseCode: string;
  RRN: string;
  srcAccount: string;
  terminalId: string;
  transactionDate: string;
  transactionId: string;
  transType: string;
}
