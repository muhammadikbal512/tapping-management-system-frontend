import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { MtiConfigurationModel } from 'src/app/model/modules-model/mti-configuration.model';

export class MtiConfigGet {
  static readonly type = '[MTI] Get';
}

export class MtiConfigAdd {
  static readonly type = '[MTI] Add';
  constructor(public payload: MtiConfigurationModel) {}
}

export class MtiConfigUpdate {
  static readonly type = '[MTI] Update';
  constructor(
    public id: number,
    public payload: FormData,
    public stateData: MtiConfigurationModel
  ) {}
}

export class MtiConfigDelete {
  static readonly type = '[MTI] Delete';
  constructor(public id: number) {}
}

export class MtiConfigSuccessState {
  static readonly type = '[MTI] Success';
  constructor(public successMessage: CustomHttpResponseModel) {}
}

export class MtiConfigErrorState {
  static readonly type = '[MTI] Error';
  constructor(public errorMessage: CustomHttpResponseModel) {}
}
