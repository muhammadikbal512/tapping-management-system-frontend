import {
  AlertInvestigationGet,
  AlertInvestigationErrorState,
  AlertInvestigationSuccessState,
  AlertInvestigationRejected,
  AlertInvestigationGetRoles,
} from './alert-investigation.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationDispatch {
  @Dispatch()
  public _AlertInvestigationGetDispatch() {
    return new AlertInvestigationGet();
  }

  @Dispatch()
  public _AlertInvestigationGetRolesDispatch() {
    return new AlertInvestigationGetRoles();
  }

  @Dispatch()
  public _AlertInvestigationDeleteDispatch(payload: AlertInvestigationModel) {
    return new AlertInvestigationRejected(payload);
  }

  @Dispatch()
  public _AlertInvestigationSuccessDispatch(message: CustomHttpResponseModel) {
    return new AlertInvestigationSuccessState(message);
  }

  @Dispatch()
  public _AlertInvestigationErrorDispatch(message: CustomHttpResponseModel) {
    return new AlertInvestigationErrorState(message);
  }
}
