import {
  AlertInvestigationGet,
  AlertInvestigationErrorState,
  AlertInvestigationSuccessState,
  AlertInvestigationDelete,
} from './alert-investigation.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class AlertInvestigationDispatch {
  @Dispatch()
  public _AlertInvestigationGetDispatch() {
    return new AlertInvestigationGet();
  }

  @Dispatch()
  public _AlertInvestigationDeleteDispatch(id: number) {
    return new AlertInvestigationDelete(id);
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
