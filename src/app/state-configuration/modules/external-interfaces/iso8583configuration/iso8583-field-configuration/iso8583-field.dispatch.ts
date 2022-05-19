import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import {
  Iso8583FieldGet,
  Iso8583FieldGetDialect,
  Iso8583FieldGetAttribute,
  Iso8583FieldAdd,
  Iso8583FieldUpdate,
  Iso8583FieldDelete,
  Iso8583FieldSuccessState,
  Iso8583FieldErrorState
} from './iso8583-field.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class Iso8583FieldDispatch {
    
    @Dispatch()
    public _Iso8583FieldGetDispatch() {
        return new Iso8583FieldGet();
    }

    @Dispatch()
    public _Iso8583FieldGetDialectDispatch() {
        return new Iso8583FieldGetDialect();
    }

    @Dispatch()
    public _Iso8583FieldGetAttributeDispatch() {
        return new Iso8583FieldGetAttribute();
    }

    @Dispatch()
    public _Iso8583FieldAddDispatch(payload: Iso8583FieldModel) {
        return new Iso8583FieldAdd(payload);
    }

    @Dispatch()
    public _Iso8583FieldUpdateDispatch(id: number, payload: FormData, stateData: Iso8583FieldModel) {
        return new Iso8583FieldUpdate(id, payload, stateData)
    }

    @Dispatch()
    public _Iso8583FieldDeleteDispatch(id: number) {
        return new Iso8583FieldDelete(id);
    }

    @Dispatch()
    public _Iso8583FieldSuccessState(message: CustomHttpResponseModel) {
        return new Iso8583FieldSuccessState(message);
    }

    @Dispatch()
    public _Iso8583FieldErrorState(message: CustomHttpResponseModel) {
        return new Iso8583FieldErrorState(message);
    }
}
