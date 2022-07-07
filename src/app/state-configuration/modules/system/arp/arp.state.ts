import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { ArpModel } from 'src/app/model/modules-model/arp.model';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { ArpGet, ArpSuccessState, ArpErrorState } from './arp.action';

export class ArpStateModel {
  Arps: ArpModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<ArpStateModel>({
  name: 'Arp',
  defaults: {
    Arps: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class ArpState {
  constructor(private notifierService: NotificationService) {}

  @Selector()
  public Arp(state: ArpStateModel) {
    return state.Arps;
  }

  @Selector()
  public responseMessage(state: ArpStateModel) {
    return state.responseMessage;
  }

  @Action(ArpGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<ArpStateModel>
  ) {}

  @Action(ArpSuccessState) ifStateSuccess(
    ctx: StateContext<ArpStateModel>,
    { successMessage }: ArpSuccessState
  ) {}

  @Action(ArpErrorState) ifStateError(
    ctx: StateContext<ArpStateModel>,
    { errorMessage }: ArpErrorState
  ) {}
}
