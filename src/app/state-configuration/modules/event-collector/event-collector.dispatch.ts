import {
  EventCollectorAdd,
  EventCollectorDelete,
  EventCollectorErrorState,
  EventCollectorGet,
  EventCollectorSuccessState,
  EventCollectorUpdate,
} from './event-collector.action';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';

@Injectable({
    providedIn: 'root'
})
export class EventCollectorDispatch {

    @Dispatch()
    public _EventCollectorGetDispatch() {
        return new EventCollectorGet();
    }

    @Dispatch()
    public _EventCollectorAddDispatch(payload: EventCollectorInterface) {
        return new EventCollectorAdd(payload);
    }

    @Dispatch()
    public _EventCollectorDeleteDispatch(id: number) {
        return new EventCollectorDelete(id);
    }

    @Dispatch()
    public _EventCollectorUpdateDispatch(id: number, payload: FormData, stateData: EventCollectorInterface) {
        return new EventCollectorUpdate(id, payload, stateData)
    }

    @Dispatch()
    public _EventCollectorSuccessState(message: CustomHttpResponseModel) {
        return new EventCollectorSuccessState(message);
    }

    @Dispatch()
    public _EventcollectorErrorState(message: CustomHttpResponseModel) {
        return new EventCollectorErrorState(message);
    }

}
