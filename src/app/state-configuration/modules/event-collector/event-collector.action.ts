import { CustomHttpResponseModel } from "src/app/model/customHttpResponse-Model/custom-http-response.model";
import { EventCollectorModel } from "src/app/model/modules-model/event-collector.model";

export class EventCollectorGet {
    static readonly type = '[Event] Get';
}

export class EventCollectorAdd {
    static readonly type = '[Event] Add';
    constructor(public payload: EventCollectorModel) {}
}

export class EventCollectorDelete {
    static readonly type = '[Event] Delete';
    constructor(public id: number) {}
}

export class EventCollectorUpdate {
    static readonly type = '[Event] Update';
    constructor(public id: number, public payload: FormData, public stateData: EventCollectorModel) {}
}

export class EventCollectorSuccessState {
    static readonly type = '[Event] Success';
    constructor(public successMessage: CustomHttpResponseModel) {}
}

export class EventCollectorErrorState {
    static readonly type = '[Event] Error';
    constructor(public errorMessage: CustomHttpResponseModel) {}
}