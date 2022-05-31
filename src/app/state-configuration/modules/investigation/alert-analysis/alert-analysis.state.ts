import { State, Action, StateContext, Selector } from '@ngxs/store';
import {
  AlertAnalysisGet,
  AlertAnalysisAdd,
  AlertAnalysisDelete,
  AlertAnalysisUpdate,
  AlertAnalysisErrorState,
  AlertAnalysisSuccessState,
} from './alert-analysis.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { AlertAnalysisModel } from 'src/app/model/modules-model/alert-analysis.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { AlertAnalysisService } from 'src/app/modules/services/module-services/alert-analysis.service';
import { AlertAnalysisTableService } from 'src/app/modules/services/module-services/alert-analysis-table.service';

export class AlertAnalysisStateModel {
  AlertAnalysis: AlertAnalysisModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

State<AlertAnalysisStateModel>({
  name: 'alertAnalysis',
  defaults: {
    AlertAnalysis: [],
    responseMessage: undefined,
  },
});

@Injectable()
export class AlertAnalysisState {
  constructor(
    private alertService: AlertAnalysisService,
    private alertTableService: AlertAnalysisTableService
  ) {}

  @Selector()
  static AlertAnalysis(state: AlertAnalysisStateModel) {
      return state.AlertAnalysis;
  }

  @Selector()
  static responseMessage(state: AlertAnalysisStateModel) {
      return state.responseMessage;
  }

  @Action(AlertAnalysisGet, {cancelUncompleted: true})getDataFromState() {

  }

  @Action(AlertAnalysisAdd, {cancelUncompleted: true})addDataFromState() {

  }

  @Action(AlertAnalysisDelete, {cancelUncompleted: true})deleteDataFromState() {

  }

  @Action(AlertAnalysisUpdate, {cancelUncompleted: true})updateDataFromState() {
      
  }
}
