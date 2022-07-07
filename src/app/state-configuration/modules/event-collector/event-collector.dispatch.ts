import {
  EventCollectorGet,
  EventCollectorSuccessState,
  EventCollectorErrorState,
} from './event-collector.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';

@Injectable({
    providedIn: 'root'
})
export class EventCollectorDispatch {

    @Dispatch()
    public _EventCollectorGetDispatch() {
        return new EventCollectorGet();
    }

    @Dispatch()
    public _EventCollectorSuccessDispatch(message: CustomHttpResponseModel) {
        return new EventCollectorSuccessState(message);
    }

    @Dispatch()
    public _EventCollectorErrorDispatch(message: CustomHttpResponseModel) {
        return new EventCollectorErrorState(message);
    }
}
