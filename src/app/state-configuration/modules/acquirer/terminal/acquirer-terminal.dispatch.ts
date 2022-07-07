import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { TerminalListModel } from 'src/app/model/modules-model/terminal-list.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  AcquirerTerminalGet,
  AcquirerTerminalAdd,
  AcquirerTerminalDelete,
  AcquirerTerminalUpdate,
  AcquirerTerminalSuccessState,
  AcquirerTerminalErrorState,
} from './acquirer-terminal.action';
import { AcquirerTerminalModel } from 'src/app/model/modules-model/acquirer-terminal.model';

@Injectable({
  providedIn: 'root',
})
export class AcquirerTerminalDispatch {
  @Dispatch()
  public _AcquirerTerminalGetDispatch() {
    return new AcquirerTerminalGet();
  }

  @Dispatch()
  public _AcquirerTerminalAddDispatch(payload: TerminalListModel) {
    return new AcquirerTerminalAdd(payload);
  }

  @Dispatch()
  public _AcquirerTerminalDeleteDispatch(id: number) {
    return new AcquirerTerminalDelete(id);
  }

  @Dispatch()
  public _AcquirerTerminalUpdateDispatch(
    id: number,
    payload: FormData,
    stateData: AcquirerTerminalModel
  ) {
      return new AcquirerTerminalUpdate(id, payload, stateData)
  }

  @Dispatch()
  public _AcquirerTerminalSuccessDispatch(message: CustomHttpResponseModel) {
      return new AcquirerTerminalSuccessState(message);
  }

  @Dispatch()
  public _AcquirerTerminalErrorDispatch(message: CustomHttpResponseModel) {
      return new AcquirerTerminalErrorState(message);
  }
}
