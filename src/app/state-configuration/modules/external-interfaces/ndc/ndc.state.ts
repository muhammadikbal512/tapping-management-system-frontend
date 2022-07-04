import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NdcModel } from 'src/app/model/modules-model/ndc.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { NdcGet, NdcSuccessState, NdcErrorState } from './ndc.action';

export class NdcStateModel {
  NDC: NdcModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<NdcStateModel>({
  name: 'Ndc',
  defaults: {
    NDC: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class NdcState {
  constructor(notifierService: NotificationService) {}

  @Selector()
  static NDC(state: NdcStateModel) {
    return state.NDC;
  }

  @Selector()
  static responseMessage(state: NdcStateModel) {
    return state.responseMessage;
  }

  @Action(NdcGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<NdcStateModel>
  ) {}

  @Action(NdcSuccessState) ifStateSucccess(
    ctx: StateContext<NdcStateModel>,
    { successMessage }: NdcSuccessState
  ) {};

  @Action(NdcErrorState)ifStateError(ctx: StateContext<NdcStateModel>, {errorMessage}: NdcErrorState) {};
}
