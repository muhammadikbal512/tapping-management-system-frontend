import {
  XmlConfigGet,
  XmlConfigSuccessState,
  XmlConfigErrorState,
} from './xml-config.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class XmlConfigDispatch {
    
    @Dispatch()
    public _XmlConfigurationGetDispatch() {
        return new XmlConfigGet();
    }

    @Dispatch()
    public _XmlConfigurationSuccessDispatch(message: CustomHttpResponseModel) {
        return new XmlConfigSuccessState(message);
    }

    @Dispatch()
    public _XmlConfigurationErrorDispatch(message: CustomHttpResponseModel) {
        return new XmlConfigErrorState(message);
    }
}
