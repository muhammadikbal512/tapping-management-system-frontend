import { Action, State, StateContext, Selector } from '@ngxs/store';
import {
  Iso20022Get,
  Iso20022SuccessState,
  Iso20022ErrorState,
} from './iso20022.action';
import { Injectable } from '@angular/core';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class Iso20022StateModel {
  ISO20022: Iso20022Model[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<Iso20022StateModel>({
  name: 'Iso20022',
  defaults: {
    ISO20022: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class Iso20022State {
  constructor() {}

  @Selector()
  public ISO20022(state: Iso20022StateModel) {
    return state.ISO20022;
  }

  @Selector()
  public responseMessage(state: Iso20022StateModel) {
    return state.responseMessage;
  }

  @Action(Iso20022Get, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<Iso20022StateModel>
  ) {}

  @Action(Iso20022SuccessState) ifStateSuccess(
    ctx: StateContext<Iso20022StateModel>,
    { successMessage }: Iso20022SuccessState
  ) {}

  @Action(Iso20022ErrorState) ifStateError(
    ctx: StateContext<Iso20022StateModel>,
    { errorMessage }: Iso20022ErrorState
  ) {}
}
