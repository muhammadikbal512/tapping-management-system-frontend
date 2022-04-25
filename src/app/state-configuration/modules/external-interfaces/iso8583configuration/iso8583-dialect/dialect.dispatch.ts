import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import {
  DialectAdd,
  DialectDelete,
  DialectUpdate,
  DialectsGet,
  DialectGetMessageFormat,
  DialectSuccessState,
  DialectErrorState
} from './dialect.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';


@Injectable({
    providedIn: 'root'
})
export class DialectDispatch {
    @Dispatch()
    public _DialectGetDispatch() {
        return new DialectsGet();
    }

    @Dispatch()
    public _DialectGetMessageFormat() {
        return new DialectGetMessageFormat();
    }

    @Dispatch()
    public _DialectAddDispatch(payload: Iso8583DialectMsgTemplate) {
        return new DialectAdd(payload);
    }

    @Dispatch()
    public _DialectUpdateDispatch(payload: FormData, stateData: Iso8583DialectMsgTemplate, id: number) {
        return new DialectUpdate(id, payload, stateData)
    }

    @Dispatch()
    public _DialectDeleteDispatch(id: number) {
        return new DialectDelete(id)
    }

    @Dispatch()
    public _DialectSuccessStateDispatch(message: CustomHttpResponseModel) {
      return new DialectSuccessState(message)
    }
  
    @Dispatch()
    public _DialectErrorStateDispatch(message: CustomHttpResponseModel) {
      return new DialectErrorState(message);
    }

    
}
