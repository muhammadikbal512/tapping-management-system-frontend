import { ArpGet, ArpSuccessState, ArpErrorState } from './arp.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})

export class ArpDispatch {
    @Dispatch()
    public _ArpGetDispatch() {
        return new ArpGet();
    }

    @Dispatch()
    public _ArpSuccessState(message: CustomHttpResponseModel) {
        return new ArpSuccessState(message);
    }

    @Dispatch()
    public _ArpErrorState(message: CustomHttpResponseModel) {
        return new ArpErrorState(message);
    }
}