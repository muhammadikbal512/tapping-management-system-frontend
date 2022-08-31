import {
  InstitutionAdd,
  InstitutionDelete,
  InstitutionGet,
  InstitutionStateError,
  InstitutionStateSuccess,
  InstitutionUpdate,
} from './institution.action';
import { Injectable } from '@angular/core';
import { State, StateContext, Action, Selector } from '@ngxs/store';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { InstitutionModel } from 'src/app/model/modules-model/institution.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';
import { InstitutionTableService } from 'src/app/modules/services/module-services/institution-table.service';

export class InstitutionStateModel {
  institutions: InstitutionModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<InstitutionStateModel>({
  name: 'Institutions',
  defaults: {
    institutions: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class InstitutionState {
  constructor(
    private institutionService: InstitutionService,
    private institutionTableService: InstitutionTableService,
    private notifierService: NotificationService
  ) {}

  @Selector()
  static institutions(state: InstitutionStateModel) {
    return state.institutions;
  }

  @Selector()
  static responseMessage(state: InstitutionStateModel) {
    return state.responseMessage;
  }

  @Action(InstitutionGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<InstitutionStateModel>
  ) {}

  @Action(InstitutionAdd, { cancelUncompleted: true }) addDataFromState(
    ctx: StateContext<InstitutionStateModel>,
    { payload }: InstitutionAdd
  ) {}

  @Action(InstitutionDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<InstitutionStateModel>,
    { id }: InstitutionDelete
  ) {}
}
