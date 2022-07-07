import {
  RolesGet,
  RolesAdd,
  RolesDelete,
  RolesErrorState,
  RolesSuccessState,
  RolesUpdate,
} from './roles.action';
import { RolesModel } from 'src/app/model/modules-model/roles.model';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs';

export class RolesStateModel {
  Roles: RolesModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<RolesStateModel>({
  name: 'roles',
  defaults: {
    Roles: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class RolesState {
  constructor(
    private rolesService: RolesService,
    private rolesTableService: RolesTableService
  ) {}

  @Selector()
  static Roles(state: RolesStateModel) {
    return state.Roles;
  }

  @Selector()
  static ResponseMessage(state: RolesStateModel) {
    return state.responseMessage;
  }

  @Action(RolesGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<RolesStateModel>
  ) {}

  @Action(RolesAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<RolesStateModel>,
    { payload }: RolesAdd
  ) {}

  @Action(RolesDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<RolesStateModel>,
    { id }: RolesDelete
  ) {}

  @Action(RolesUpdate, { cancelUncompleted: true }) updateDataFromState(
    ctx: StateContext<RolesStateModel>,
    { id, payload, stateData }: RolesUpdate
  ) {}

  @Action(RolesSuccessState) ifStateSuccess(
    ctx: StateContext<RolesStateModel>,
    { successMessage }: RolesSuccessState
  ) {}

  @Action(RolesErrorState) ifStateError(
    ctx: StateContext<RolesStateModel>,
    { errorMessage }: RolesErrorState
  ) {}
}
