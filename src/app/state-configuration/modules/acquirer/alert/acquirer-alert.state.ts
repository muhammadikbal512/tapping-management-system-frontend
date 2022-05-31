import { Action, Selector, State, StateContext } from '@ngxs/store';
import {
  AcquirerAlertGet,
  AcquirerAlertAdd,
  AcquirerAlertDelete,
  AcquirerAlertErrorState,
  AcquirerAlertUpdate,
  AcquirerAlertSuccessState,
} from './acquirer-alert.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AcquirerAlertModel } from 'src/app/model/modules-model/acquirer-alert.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AlertAcquirerService } from 'src/app/modules/services/module-services/alert-acquirer.service';
import { AlertAcquirerTableService } from 'src/app/modules/services/module-services/alert-acquirer-table.service';

export class AcquirerAlertStateModel {
  AcquirerAlerts: AcquirerAlertModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<AcquirerAlertStateModel>({
  name: 'acquirerAlert',
  defaults: {
    AcquirerAlerts: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class AcquirerAlertState {
  constructor(
    private alertService: AlertAcquirerService,
    private alertTableService: AlertAcquirerTableService
  ) {}

  @Selector()
  public _AcquirerAlerts(state: AcquirerAlertStateModel) {
      return state.AcquirerAlerts;
  }

  @Selector()
  public _responseMessage(state: AcquirerAlertStateModel) {
      return state.responseMessage;
  }

  
}
