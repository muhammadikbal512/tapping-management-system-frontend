import {
  EventCollectorAdd,
  EventCollectorDelete,
  EventCollectorErrorState,
  EventCollectorGet,
  EventCollectorSuccessState,
  EventCollectorUpdate,
} from './event-collector.action';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { Injectable } from '@angular/core';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';

@Injectable({
    providedIn: 'root'
})

export class EventCollectorDispatch {

    @Dispatch()
    public _EventCollectorGetDispatch() {
        return new EventCollectorGet();
    }

    @Dispatch()
    public _EventCollectorAddDispatch(payload: EventCollectorModel) {
        return new EventCollectorAdd(payload);
    }

    @Dispatch()
    public _EventCollectorDeleteDispatch(id: number) {
        return new EventCollectorDelete(id);
    }

    @Dispatch()
    public _EventCollectorUpdateDispatch(id: number, payload: FormData, stateData: EventCollectorModel) {
        return new EventCollectorUpdate(id, payload, stateData);
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