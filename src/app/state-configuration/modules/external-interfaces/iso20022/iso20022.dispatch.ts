import {
  Iso20022Get,
  Iso20022SuccessState,
  Iso20022ErrorState,
  Iso20022Delete,
  Iso20022Update,
  Iso20022Add,
} from './iso20022.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Iso20022Model } from 'src/app/model/modules-model/iso20022.model';
import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class Iso20022Dispatch {
    @Dispatch()
    public _Iso20022GetDispatch() {
        return new Iso20022Get();
    }

    @Dispatch()
    public _Iso20022AddDispatch(payload: Iso20022Model) {
        return new Iso20022Add(payload);
    }

    @Dispatch()
    public _Iso20022DeleteDispatch(id: number) {
        return new Iso20022Delete(id);
    }

    @Dispatch()
    public _Iso20022UpdateDispatch(id: number, payload: FormData, stateData: Iso20022Model) {
        return new Iso20022Update(id, payload, stateData)
    }

    @Dispatch()
    public _Iso20022SuccessStateDispatch(message: CustomHttpResponseModel) {
        return new Iso20022SuccessState(message);
    }

    @Dispatch()
    public _Iso20022ErrorStateDispatch(message: CustomHttpResponseModel) {
        return new Iso20022ErrorState(message);
    }
}
