import {
  AlertInvestigationGet,
  avaliableCaseForUser,
  classifiedCase,
  classifyCase,
  confirmCase,
  forwardCase,
  lockCase,
  postPoneCase,
  rejectCase,
  rejectCaseByInitiator,
  AlertInvestigationErrorState,
  AlertInvestigationSuccessState,
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
  public _AlertInvestigationAvaliableCaseForUser(username: string) {
    return new avaliableCaseForUser(username)
  }

  @Dispatch()
  public _AlertInvestigationClassifiedCase(payload: AlertInvestigationModel) {
    return new classifiedCase(payload)
  }

  @Dispatch()
  public _AlertInvestigationClassifyCase(id: number) {
    return new classifyCase(id)
  }

  @Dispatch()
  public _AlertInvestigationConfirmCase(payload: AlertInvestigationModel) {
    return new confirmCase(payload)
  }

  @Dispatch()
  public _AlertInvestigationForwardCase(caseId: number, username: string, comment: string) {
    return new forwardCase(caseId, username, comment)
  }

  @Dispatch()
  public _AlertInvestigationLockCase(caseId: number, username: string) {
    return new lockCase(caseId, username)
  }

  @Dispatch()
  public _AlertInvestigationPostPoneCase(payload: AlertInvestigationModel) {
    return new postPoneCase(payload)
  }

  @Dispatch()
  public _AlertInvestigationRejectCase(caseId: number, comment: string) {
    return new rejectCase(caseId, comment)
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
