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
import { EventCollectorTableService } from 'src/app/modules/services/module-services/event-collector-table.service';
import { EventCollectorService } from 'src/app/modules/services/module-services/event-collector.service';
import { catchError, tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

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
    private eventService: EventCollectorService,
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
  ) {
    return this.eventService.getAllEventCollector().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.eventTableService.showTableLoading();
          this.eventTableService.setRowData(response);
        } else {
          this.eventTableService.showNoRowData();
          this.eventTableService.setRowData(response);
        }
        ctx.patchState({
          ...ctx.getState(),
          EventCollectors: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new EventCollectorErrorState(response.error));
      })
    );
  }

  @Action(EventCollectorSuccessState) ifStateSuccess(
    ctx: StateContext<EventCollectorStateModel>,
    { successMessage }: EventCollectorSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );

    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(EventCollectorErrorState) ifStateError(
    ctx: StateContext<EventCollectorStateModel>,
    { errorMessage }: EventCollectorErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
