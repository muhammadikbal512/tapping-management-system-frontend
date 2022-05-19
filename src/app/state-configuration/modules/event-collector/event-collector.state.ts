import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Action, Select, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  EventCollectorGet,
  EventCollectorAdd,
  EventCollectorDelete,
  EventCollectorErrorState,
  EventCollectorSuccessState,
  EventCollectorUpdate,
} from './event-collector.action';
import { EventCollectorService } from 'src/app/modules/services/module-services/event-collector.service';
import { EventCollectorTableService } from 'src/app/modules/services/module-services/event-collector-table.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';

export class EventCollectorStateModel {
    eventCollectors: EventCollectorModel[] = [];
    responseMessage: CustomHttpResponseModel | undefined
}

@State<EventCollectorStateModel>({
    name: 'eventCollector',
    defaults: {
        eventCollectors: [],
        responseMessage: undefined
    }
})
@Injectable()

export class EventCollectorState {
    constructor(
        private eventCollectorService: EventCollectorService,
        private eventCollectorTableService: EventCollectorTableService
    ) {}

    @Selector()
    static eventCollectors(state: EventCollectorStateModel) {
        return state.eventCollectors;
    }

    @Selector()
    static responseMessage(state: EventCollectorStateModel) {
        return state.responseMessage;
    }
}
