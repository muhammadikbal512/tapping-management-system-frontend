import {
  Iso8583FieldGet,
  Iso8583FieldAdd,
  Iso8583FieldUpdate,
  Iso8583FieldDelete,
  Iso8583FieldSuccessState,
  Iso8583FieldErrorState,
  Iso8583FieldIsoConfig,
  Iso8583FieldEncoding,
  Iso8583FieldFormat,
  Iso8583SubFieldAdd,
  Iso8583SubFieldGet,
  Iso8583SubFieldDelete,
  Iso8583SubFieldUpdate
} from './iso8583-field.action';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import {
  Iso8583FieldModel,
  Iso8583SubFieldModel,
} from 'src/app/model/modules-model/iso8583-field.model';
import { HttpResponseData } from 'src/app/model/modules-model/http-response-data';

@Injectable({
  providedIn: 'root',
})
export class Iso8583FieldDispatch {
  @Dispatch()
  public _Iso8583FieldGetDispatch() {
    return new Iso8583FieldGet();
  }

  @Dispatch()
  public _Iso8583SubFieldGetDispatch() {
    return new Iso8583SubFieldGet();
  }

  @Dispatch()
  public _Iso8583FieldIsoConfigGetDispatch() {
    return new Iso8583FieldIsoConfig();
  }

  @Dispatch()
  public _Iso8583FieldEncodingGetDispatch() {
    return new Iso8583FieldEncoding();
  }

  @Dispatch()
  public _Iso8583FieldFormatGetDispatch() {
    return new Iso8583FieldFormat();
  }

  @Dispatch()
  public _Iso8583FieldAddDispatch(payload: Iso8583FieldModel) {
    return new Iso8583FieldAdd(payload);
  }

  @Dispatch()
  public _Iso8583FieldUpdateDispatch(payload: Iso8583FieldModel) {
    return new Iso8583FieldUpdate(payload);
  }

  @Dispatch()
  public _Iso8583FieldDeleteDispatch(id: number) {
    return new Iso8583FieldDelete(id);
  }

  @Dispatch()
  public _Iso8583SubFieldAddDispatch(payload: Iso8583SubFieldModel) {
    return new Iso8583SubFieldAdd(payload);
  }

  @Dispatch()
  public _Iso8583SubFieldDeleteDispatch(id: number) {
    return new Iso8583SubFieldDelete(id);
  }

  @Dispatch()
  public _Iso8583SubFieldUpdateDispatch(id: number, payload: Iso8583SubFieldModel) {
    return new Iso8583SubFieldUpdate(id, payload);
  }

  @Dispatch()
  public _Iso8583FieldSuccessState(message: HttpResponseData<any>) {
    return new Iso8583FieldSuccessState(message);
  }

  @Dispatch()
  public _Iso8583FieldErrorState(message: HttpResponseData<any>) {
    return new Iso8583FieldErrorState(message);
  }
}
