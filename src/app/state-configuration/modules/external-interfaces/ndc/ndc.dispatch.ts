import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { NdcGet, NdcSuccessState, NdcErrorState } from './ndc.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';


@Injectable({
    providedIn: 'root'
})
export class NdcDispatch {
    @Dispatch()
    public _NdcGetDispatch() {
        return new NdcGet();
    }

    @Dispatch()
    public _NdcSuccessDispatch(message: CustomHttpResponseModel) {
        return new NdcSuccessState(message);
    }

    @Dispatch()
    public _NdcErrorDispatch(message: CustomHttpResponseModel) {
        return new NdcErrorState(message);
    }
}
