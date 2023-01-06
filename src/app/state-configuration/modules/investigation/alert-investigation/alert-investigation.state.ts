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
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/user-management/roles.service';
import { catchError, tap } from 'rxjs';
import { RoleInterface } from 'src/app/interface/modules/role-interface';
import { HttpErrorResponse } from '@angular/common/http';

export class AlertInvestigationStateModel {
  alertInvestigation: AlertInvestigationModel[] = [];
  Roles: RolesModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<AlertInvestigationStateModel>({
  name: 'alertInvestigation',
  defaults: {
    alertInvestigation: [],
    Roles: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class AlertInvestigationState {
  constructor(
    private notifierService: NotificationService,
    private alertService: AlertInvestigationService,
    private alertTableService: AlertInvestigationTableService,
    private roleService: RolesService
  ) {}

  @Selector()
  static alertInvestigation(state: AlertInvestigationStateModel) {
    return state.alertInvestigation;
  }

  @Selector()
  static Roles(state: AlertInvestigationStateModel) {
    return state.Roles;
  }

  @Selector()
  static responseMessage(state: AlertInvestigationStateModel) {
    return state.responseMessage;
  }

  @Action(AlertInvestigationGet, { cancelUncompleted: true })
  getDataFromState(ctx: StateContext<AlertInvestigationStateModel>) {
    return this.alertService.getAllAlertInvestigation().pipe(
      tap((response) => {
        if (response?.length != 0) {
          this.alertTableService.loading = false;
          this.alertTableService.setRowData(response);
        } else {
          this.alertTableService.setRowData(response);
          this.alertTableService.loading = false;
        }
        ctx.patchState({
          ...ctx.getState(),
          alertInvestigation: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new AlertInvestigationErrorState(response.error));
      })
    );
  }

  @Action(AlertInvestigationErrorState) ifErrorState(
    ctx: StateContext<AlertInvestigationStateModel>,
    { errorMessage }: AlertInvestigationErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );
    this.alertTableService.loading = false;
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
