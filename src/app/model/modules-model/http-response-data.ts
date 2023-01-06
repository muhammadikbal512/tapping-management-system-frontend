export class HttpResponseData<T> {
  responseData: T[] = [];
  timeStamp: string = '';
  responseCode: number = 0;
  responseReason: string = '';
  responseMessage: string = '';
}
