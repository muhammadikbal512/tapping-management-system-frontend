import {
  EventCollectorAdd,
  EventCollectorDelete,
  EventCollectorErrorState,
  EventCollectorGet,
  EventCollectorSuccessState,
  EventCollectorUpdate,
} from './event-collector.action';
import { Action, Selector, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { EventCollectorService } from 'src/app/modules/services/module-services/event-collector.service';
import { EventCollectorTableService } from 'src/app/modules/services/module-services/event-collector-table.service';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

export class EventCollectorStateModel {
  eventCollectors: EventCollectorModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<EventCollectorStateModel>({
  name: 'eventCollector',
  defaults: {
    eventCollectors: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class EventCollectorState {
  constructor(
    private eventService: EventCollectorService,
    private eventTableService: EventCollectorTableService
  ) {}

  @Selector()
  static eventCollectors(state: EventCollectorStateModel) {
      return state.eventCollectors;
  }

  @Selector()
  static responseMessage(state: EventCollectorStateModel) {
      return state.responseMessage
  }

  @Action(EventCollectorGet, {cancelUncompleted: true})getDataFromState(ctx: StateContext<EventCollectorStateModel>){

  }

  @Action(EventCollectorAdd, {cancelUncompleted: true})addDataFromState(ctx: StateContext<EventCollectorStateModel>, {payload}: EventCollectorAdd) {

  }

  @Action(EventCollectorDelete, {cancelUncompleted: true})deleteDataFromState(ctx: StateContext<EventCollectorStateModel>, {id}: EventCollectorDelete){

  }

  @Action(EventCollectorUpdate, {cancelUncompleted: true})updateDataFromState(ctx: StateContext<EventCollectorStateModel>, {id, payload, stateData}: EventCollectorUpdate) {

  }

  @Action(EventCollectorSuccessState)ifStateSuccess(ctx: StateContext<EventCollectorStateModel>, {successMessage}: EventCollectorSuccessState) {

  }

  @Action(EventCollectorErrorState)ifStateError(ctx: StateContext<EventCollectorStateModel>, {errorMessage}: EventCollectorErrorState) {
      
  }


}
