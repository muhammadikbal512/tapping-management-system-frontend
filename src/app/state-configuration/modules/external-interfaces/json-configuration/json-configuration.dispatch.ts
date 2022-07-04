import {
  JsonConfigurationGet,
  JsonConfigurationSuccessState,
  JsonConfigurationErrorState,
} from './json-configuration.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';


@Injectable({
    providedIn: 'root'
})
export class JsonConfigurationDispatch {
    @Dispatch()
    public _JsonConfigurationGetDispatch() {
        return new JsonConfigurationGet();
    }

    @Dispatch()
    public _JsonConfigurationSuccessStateDispatch(message: CustomHttpResponseModel) {
        return new JsonConfigurationSuccessState(message);
    }

    @Dispatch()
    public _JsonConfigurationErrorStateDispatch(message: CustomHttpResponseModel) {
        return new JsonConfigurationErrorState(message);
    }
}
