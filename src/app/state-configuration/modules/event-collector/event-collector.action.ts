import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { EventCollectorInterface } from "src/app/interface/modules/event-collector";

export class EventCollectorGet {
    static readonly type = '[EventCollector] Get';
}

export class EventCollectorAdd {
    static readonly type = '[EventCollector] Add';
    constructor(public payload: EventCollectorInterface) {}
}

export class EventCollectorDelete {
    static readonly type = '[EventCollector] Delete';
    constructor(public id: number) {}
}

export class EventCollectorUpdate {
    static readonly type = '[EventCollector] Update';
    constructor(public id: number, public payload: FormData, public stateData: EventCollectorInterface) {}
}

export class EventCollectorSuccessState {
    static readonly type = '[EventCollector] Success';
    constructor(public Successmessage: CustomHttpResponseModel) {}
}

export class EventCollectorErrorState {
    static readonly type = '[EventCollector] Error';
    constructor(public Errormessage: CustomHttpResponseModel) {}
}