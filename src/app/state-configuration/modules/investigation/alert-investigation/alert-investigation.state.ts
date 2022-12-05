import { Action, Selector, State, StateContext } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { AlertInvestigationModel } from 'src/app/model/modules-model/alert-investigation.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  AlertInvestigationGet,
  AlertInvestigationSuccessState,
  AlertInvestigationErrorState,
  AlertInvestigationGetRoles,
  AlertInvestigationRejected,
} from './alert-investigation.action';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { AlertInvestigationService } from 'src/app/modules/services/module-services/alert-investigation.service';
import { AlertInvestigationTableService } from 'src/app/modules/services/module-services/alert-investigation-table.service';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { tap } from 'rxjs';
import { RoleInterface } from 'src/app/interface/modules/role-interface';

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
      })
    );
  }

  @Action(AlertInvestigationGetRoles, { cancelUncompleted: true })
  getRolesFromState(ctx: StateContext<AlertInvestigationGetRoles>) {
    return this.roleService.getAllRoles().pipe(
      tap((response) => {
        let roleParseList: RoleInterface[] = [];
        response.forEach((x) => {
          roleParseList.push({
            name: x.roleName,
            code: String(x.id),
          });
        });

        ctx.patchState({
          ...ctx.getState(),
          Roles: roleParseList,
        });
      })
    );
  }

  @Action(AlertInvestigationRejected, { cancelUncompleted: true })
  sendCaseRejected(
    ctx: StateContext<AlertInvestigationStateModel>,
    { payload }: AlertInvestigationRejected
  ) {}

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
      responseMessage: successMessage,
    });
  }

  @Action(AlertInvestigationErrorState) ifErrorState(
    ctx: StateContext<AlertInvestigationStateModel>,
    { errorMessage }: AlertInvestigationErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.httpStatusCode
    );
    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
