import {
  TerminalIssuerGet,
  TerminalIssuerAdd,
  TerminalIssuerDelete,
  TerminalIssuerUpdate,
  TerminalIssuerSuccessState,
  TerminalIssuerErrorState,
} from './terminal-issuer.action';
import { Injectable } from '@angular/core';
import { Selector, State, StateContext, Action } from '@ngxs/store';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { IssuerTerminalModel } from 'src/app/model/modules-model/issuer-terminal.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { TerminalIssuerService } from 'src/app/modules/services/module-services/terminal-issuer.service';
import { TerminalIssuerTableService } from 'src/app/modules/services/module-services/terminal-issuer-table.service';

export class TerminalIssuerStateModel {
  terminalIssuers: IssuerTerminalModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<TerminalIssuerStateModel>({
  name: 'TerminalIssuer',
  defaults: {
    terminalIssuers: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class TerminalIssuerState {
  constructor(
    private terminalService: TerminalIssuerService,
    private terminalTableService: TerminalIssuerTableService
  ) {}

  @Selector()
  static terminalIssuers(state: TerminalIssuerStateModel) {
    return state.terminalIssuers;
  }

  @Selector()
  static responseMessage(state: TerminalIssuerStateModel) {
    return state.responseMessage;
  }

  @Action(TerminalIssuerGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<TerminalIssuerStateModel>
  ) {}

  @Action(TerminalIssuerAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<TerminalIssuerStateModel>
  ) {}

  @Action(TerminalIssuerDelete, { cancelUncompleted: true })
  deleteDataFromState(ctx: StateContext<TerminalIssuerStateModel>) {}

  @Action(TerminalIssuerUpdate, { cancelUncompleted: true })
  updateDataFromState(ctx: StateContext<TerminalIssuerUpdate>) {}

  @Action(TerminalIssuerSuccessState) ifStateSuccess(
    ctx: StateContext<TerminalIssuerStateModel>,
    { successMessage }: TerminalIssuerSuccessState
  ) {}

  @Action(TerminalIssuerErrorState)ifStateError(ctx: StateContext<TerminalIssuerStateModel>, {errorMessage}: TerminalIssuerErrorState){}
}
