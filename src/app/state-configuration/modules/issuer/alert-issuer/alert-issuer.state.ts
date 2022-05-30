import {
  AlertIssuerGet,
  AlertIssuerAdd,
  AlertIssuerDelete,
  AlertIssuerUpdate,
  AlertIssuerSuccessState,
  AlertIssuerErrorState,
} from './alert-issuer.action';
import { Injectable } from '@angular/core';
import { Action, Selector, StateContext, State } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertIssuerService } from 'src/app/modules/services/module-services/alert-issuer.service';
import { AlertIssuerTableService } from 'src/app/modules/services/module-services/alert-issuer-table.service';
import { AlertIssuerModel } from 'src/app/model/modules-model/alert-issuer.model';

export class AlertIssuerStateModel {
  AlertIssuers: AlertIssuerModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<AlertIssuerStateModel>({
  name: 'AlertIssuer',
  defaults: {
    AlertIssuers: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class AlertIssuerState {
  constructor(
    private AlertService: AlertIssuerService,
    private AlertTableService: AlertIssuerTableService
  ) {}

  @Selector()
  static AlertIssuers(state: AlertIssuerStateModel) {
      return state.AlertIssuers;
  }

  @Selector()
  static responseMessage(state: AlertIssuerStateModel) {
      return state.responseMessage
  }
}


