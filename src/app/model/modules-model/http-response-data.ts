export class HttpResponseData<T> {
  message: string = '';
  status: number = 0;
  responseData: T[] = [];
  timeStamp: string = '';
  responseCode: number = 0;
  responseReason: string = '';
  responseMessage: string = '';
}
