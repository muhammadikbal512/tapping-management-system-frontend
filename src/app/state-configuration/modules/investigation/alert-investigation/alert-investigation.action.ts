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

export class confirmCase {
  static readonly type = '[AlertInvestigation] Confirm Case';
  constructor(public payload: AlertInvestigationModel) {}
}

export class classifyCase {
  static readonly type = '[AlertInvestigation] Classify Case';
  constructor(public id: number) {}
}

export class rejectCaseByInitiator {
  static readonly type = '[AlertInvestigation] Reject Case By Initiator';
  constructor(public payload: AlertInvestigationModel) {}
}

export class postPoneCase {
  static readonly type = '[AlertInvestigation] PostPone Case';
  constructor(public payload: AlertInvestigationModel) {}
}

export class classifiedCase {
  static readonly type = '[AlertInvestigation] Classified Case';
  constructor(public payload: AlertInvestigationModel) {}
}

export class AlertInvestigationSuccessState {
  static readonly type = '[AlertInvestigation] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class AlertInvestigationErrorState {
  static readonly type = '[AlertInvestigation]';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
