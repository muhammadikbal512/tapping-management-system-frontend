import {
  XmlConfigGet,
  XmlConfigSuccessState,
  XmlConfigErrorState,
} from './xml-config.action';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { XmlConfigModel } from 'src/app/model/modules-model/xml-config.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

export class XmlConfigStateModel {
  XmlConfigs: XmlConfigModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<XmlConfigStateModel>({
  name: 'XmlConfiguration',
  defaults: {
    XmlConfigs: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class XmlConfigState {
  constructor(private notifierService: NotificationService) {}

  @Selector()
  public XmlConfiguration(state: XmlConfigStateModel) {
    return state.XmlConfigs;
  }

  @Selector()
  public responseMessage(state: XmlConfigStateModel) {
    return state.responseMessage;
  }

  @Action(XmlConfigGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<XmlConfigStateModel>
  ) {}

  @Action(XmlConfigSuccessState) ifStateSuccess(
    ctx: StateContext<XmlConfigStateModel>,
    { successMessage }: XmlConfigSuccessState
  ) {}

  @Action(XmlConfigErrorState) ifStateError(
    ctx: StateContext<XmlConfigErrorState>,
    { errorMessage }: XmlConfigErrorState
  ) {}
}
