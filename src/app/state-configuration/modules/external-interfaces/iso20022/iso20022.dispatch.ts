import {
  Iso20022Get,
  Iso20022SuccessState,
  Iso20022ErrorState,
} from './iso20022.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

export class Iso20022Dispatch {
    @Dispatch()
    public _Iso20022GetDispatch() {
        return new Iso20022Get();
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
