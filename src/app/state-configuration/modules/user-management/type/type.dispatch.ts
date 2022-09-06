import {
  TypeGet,
  TypeAdd,
  TypeDelete,
  TypeErrorState,
  TypeSuccessState,
  TypeUpdate,
} from './type.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { TypeModel } from 'src/app/model/modules-model/type.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class TypeDispatch {
    @Dispatch()
    public _TypeGetDispatch() {
        return new TypeGet();
    }

    @Dispatch()
    public _TypeAddDispatch(payload: TypeModel) {
        return new TypeAdd(payload);
    }

    @Dispatch()
    public _TypeDeleteDispatch(id: number) {
        return new TypeDelete(id);
    }

    @Dispatch() 
    public _TypeUpdateDispatch(id: number, payload: FormData, stateData: TypeModel) {
        return new TypeUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _TypeSuccessDispatch(message: CustomHttpResponseModel) {
        return new TypeSuccessState(message);
    }

    @Dispatch()
    public _TypeErrorDispatch(message: CustomHttpResponseModel) {
        return new TypeSuccessState(message);
    }
}
