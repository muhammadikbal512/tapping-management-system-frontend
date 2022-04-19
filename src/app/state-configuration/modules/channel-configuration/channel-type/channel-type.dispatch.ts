import { Inject, Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  ChannelTypeAdd,
  ChannelTypeDelete,
  ChannelTypeUpdate,
  ChannelTypesGet,
  ChannelTypeGetDialect,
  ChannelTypeSuccessState,
  ChannelTypeErrorState,
} from './channel-type.action';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
  providedIn: 'root',
})
export class ChannelTypeDispatch {
  @Dispatch()
  public _ChannelTypeGetDispatch() {
    return new ChannelTypesGet();
  }

  @Dispatch()
  public _ChannelTypeGetDialectDispatch() {
    return new ChannelTypeGetDialect();
  }

  @Dispatch()
  public _ChannelTypeAddDispatch(payload: ChannelTypeModel) {
    return new ChannelTypeAdd(payload);
  }

  @Dispatch()
  public _channelTypeUpdateDispatch(
    payload: FormData,
    id: number,
    stateData: ChannelTypeModel
  ) {
    return new ChannelTypeUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _channelTypeDelete(id: number) {
    return new ChannelTypeDelete(id);
  }

  @Dispatch()
  public _ChannelTypeSuccessStateDispatch(message: CustomHttpResponseModel) {
      return new ChannelTypeSuccessState(message)
  }

  @Dispatch()
  public _ChannelTypeErrorStateDispatch(message: CustomHttpResponseModel) {
      return new ChannelTypeErrorState(message)
  }
}
