import {
  SchemeGet,
  SchemeErrorState,
  SchemeSuccessState,
} from './scheme.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class SchemeDispatch {
    @Dispatch()
    public _SchemeGetDispatch() {
        return new SchemeGet();
    }

    @Dispatch()
    public _SchemeSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new SchemeSuccessState(message);
    }

    @Dispatch()
    public _SchemeErrorStateDispatch(message: CustomHttpResponseModel) {
        return new SchemeErrorState(message);
    }
}
