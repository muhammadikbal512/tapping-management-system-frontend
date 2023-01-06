import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';

export class AlertInvestigationGet {
  static readonly type = '[AlertInvestigation] Get';
}

export class lockCase {
  static readonly type = '[AlertInvestigation] Lock Case';
  constructor(public caseId: number, public username: string) {}
}

export class forwardCase {
  static readonly type = '[AlertInvestigation] Forward Case';
  constructor(
    public caseId: number,
    public username: string,
    public comment: string
  ) {}
}

export class rejectCase {
  static readonly type = '[AlertInvestigation] Reject Case';
  constructor(public caseId: number, public comment: string) {}
}

export class avaliableCaseForUser {
  static readonly type = '[AlertInvestigation] Avaliable case for User';
  constructor(public username: string) {}
}

export class AlertInvestigationSuccessState {
  static readonly type = '[AlertInvestigation] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AlertInvestigationErrorState {
  static readonly type = '[AlertInvestigation]';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
