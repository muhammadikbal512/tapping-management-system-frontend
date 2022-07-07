import {
  EventCollectorGet,
  EventCollectorSuccessState,
  EventCollectorErrorState,
} from './event-collector.action';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { EventService } from 'ag-grid-community';
import { EventCollectorTableService } from 'src/app/modules/services/module-services/event-collector-table.service';

export class EventCollectorStateModel {
  EventCollectors: EventCollectorModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<EventCollectorStateModel>({
  name: 'EventCollector',
  defaults: {
    EventCollectors: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class EventCollectorState {
  constructor(
    private notifierService: NotificationService,
    private eventService: EventService,
    private eventTableService: EventCollectorTableService
  ) {}

  @Selector()
  static EventCollectors(state: EventCollectorStateModel) {
    return state.EventCollectors;
  }

  @Selector()
  static responseMessage(state: EventCollectorStateModel) {
    return state.responseMessage;
  }

  @Action(EventCollectorGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<EventCollectorStateModel>
  ) {}

  @Action(EventCollectorSuccessState) ifStateSuccess(
    ctx: StateContext<EventCollectorStateModel>,
    { successMessage }: EventCollectorSuccessState
  ) {}

  @Action(EventCollectorErrorState) ifStateError(
    ctx: StateContext<EventCollectorErrorState>,
    { errorMessage }: EventCollectorErrorState
  ) {}
}
