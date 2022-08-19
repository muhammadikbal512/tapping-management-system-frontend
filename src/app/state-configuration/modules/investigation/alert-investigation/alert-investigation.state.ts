import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  AlertInvestigationGet,
  AlertInvestigationSuccessState,
  AlertInvestigationErrorState,
} from './alert-investigation.action';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/alert-investigation-table.service';




export class AlertInvestigationStateModel {
  alertInvestigation: AlertInvestigationModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}



@State<AlertInvestigationStateModel>({
  name: 'alertInvestigation',
  defaults: {
    alertInvestigation: [],
    responseMessage: undefined,
  },
})

@Injectable()
export class AlertInvestigationState {

  constructor(
    private notifierService: NotificationService,
    private alertService: AlertInvestigationService,
    private alertTableService: AlertInvestigationTableService
  ) {}

  get rowData() {
    return this.alertTableService.rowData;
  }
  
  @Selector()
  static alertInvestigation(state: AlertInvestigationStateModel) {
    return state.alertInvestigation;
  }

  @Selector()
  static responseMessage(state: AlertInvestigationStateModel) {
    return state.responseMessage;
  }

  @Action(AlertInvestigationGet, { cancelUncompleted: true })
  getDataFromState(ctx: StateContext<AlertInvestigationStateModel>) {
    if (this.rowData?.length != 0) {
      this.alertTableService.hideTableLoading();
      this.alertTableService.setRowData(this.rowData);
    } else {
      this.alertTableService.setRowData(this.rowData);
      this.alertTableService.showNoRowdata();
    }
    ctx.setState({
      ...ctx.getState(),
      alertInvestigation: this.rowData
    })
  }

  @Action(AlertInvestigationSuccessState) ifSuccessState(
    ctx: StateContext<AlertInvestigationStateModel>,
    { successMessage }: AlertInvestigationSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    );
    this.alertService.onGetAllAlertInvestigation();
    ctx.patchState({
      responseMessage: successMessage
    })
  }

  @Action(AlertInvestigationErrorState) ifErrorState(
    ctx: StateContext<AlertInvestigationStateModel>,
    { errorMessage }: AlertInvestigationErrorState
  ) {
      this.notifierService.errorNotification(
          errorMessage?.message,
          errorMessage?.httpStatusCode
      );
      if (this.alertTableService.gridApi.getRenderedNodes().length == 0) {
          this.alertTableService.showNoRowdata();
      } else {
          this.alertTableService.hideTableLoading();
      }
      ctx.patchState({
          responseMessage: errorMessage
      });
  }
}
