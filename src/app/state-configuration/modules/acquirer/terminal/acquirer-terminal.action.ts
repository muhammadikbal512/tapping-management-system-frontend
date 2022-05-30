import { TerminalListModel } from 'src/app/model/modules-model/terminal-list.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class AcquirerTerminalGet {
  static readonly type = '[AcquirerTerminal] Get';
}

export class AcquirerTerminalAdd {
  static readonly type = '[AcquirerTerminal] Add';
  constructor(public payload: TerminalListModel) {}
}

export class AcquirerTerminalDelete {
  static readonly type = '[AcquirerTerminal] Delete';
  constructor(public id: number) {}
}

export class AcquirerTerminalUpdate {
  static readonly type = '[AcquirerTerminal] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: TerminalListModel
  ) {}
}

export class AcquirerTerminalSuccessState {
    static readonly type = '[AcquirerTerminal] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AcquirerTerminalErrorState {
    static readonly type = '[AcquirerTerminal] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}
