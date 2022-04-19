import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { ChannelAdd, ChannelDelete, ChannelGetChannelType, ChannelsGet, ChannelUpdate } from './channel.actions';
import { ChannelModel } from 'src/app/model/modules-model/channel.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { ChannelTypeSuccessState, ChannelTypeErrorState } from '../channel-type/channel-type.action';


@Injectable({
  providedIn: 'root',
})
export class ChannelDispatch {
    @Dispatch()
  public _ChannelGetDispatch() {
    return new ChannelsGet();
  }

  @Dispatch()
  public _ChannelGetChannelTypeDispatch() {
    return new ChannelGetChannelType();
  }

  @Dispatch()
  public _ChannelAdd(payload: ChannelModel) {
    return new ChannelAdd(payload);
  }

  @Dispatch()
  public _ChannelUpdate(payload: FormData, id: number, stateData: ChannelModel) {
    return new ChannelUpdate(id, payload, stateData);
  }

  @Dispatch()
  public _ChannelDelete(id: number) {
    return new ChannelDelete(id);
  }

  @Dispatch()
  public _ChannelSuccessStateDispatch(message: CustomHttpResponseModel) {
    return new ChannelTypeSuccessState(message);
  }

  @Dispatch()
  public _ChannelErrorStateDispatch(message: CustomHttpResponseModel) {
    return new ChannelTypeErrorState(message);
  }
}
