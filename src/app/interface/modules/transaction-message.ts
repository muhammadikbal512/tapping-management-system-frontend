export interface TransactionMessageInterface {
  amount: string;
  countryCode: string;
  location: string;
  messageAscii: string;
  messageHexa: string;
  posDataCode: string;
  sequenceNumber: number;
  destAccount: string;
  hpan: string;
  clearHPAN: string;
  merchantId: string;
  merchantType: string;
  mti: string;
  networkDate: string;
  networkId: string;
  responseCode: string;
  rrn: string;
  sourceAccount: string;
  terminalId: string;
  transactionDate: string;
  transactionId: string;
  transType: string;
}
