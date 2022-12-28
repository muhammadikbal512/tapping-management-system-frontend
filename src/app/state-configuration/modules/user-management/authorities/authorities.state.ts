import { Injectable } from '@angular/core';
import { Action, State, StateContext } from '@ngxs/store';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { AuthoritiesModel } from 'src/app/model/modules-model/authorities.model';
import { AuthoritiesService } from 'src/app/modules/services/module-services/authorities/authorities.service';
import {
  AuthoritiesError,
  AuthoritiesGet,
  AuthoritiesSuccess,
} from './authorities.action';
import { tap } from 'rxjs';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';

export class AuthoritiesStateModel {
  Authorities: AuthoritiesModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State({
  name: 'Authorities',
  defaults: {
    Authorities: [],
    responseMessage: [],
  },
})
@Injectable()
export class AuthoritiesState {
  constructor(
    private authoritiesService: AuthoritiesService,
    private notifierService: NotificationService
  ) {}

  @Action(AuthoritiesGet, { cancelUncompleted: true }) getAuthoritiesFromState(
    ctx: StateContext<AuthoritiesStateModel>
  ) {
    return this.authoritiesService
      .getAllAuthorities()
      .pipe(tap((response) => {}));
  }

  @Action(AuthoritiesSuccess) ifSuccessstate(
    ctx: StateContext<AuthoritiesStateModel>,
    { successMessage }: AuthoritiesSuccess
  ) {
    if (this.authoritiesService.getCurrentStatusDialog().length != 0) {
      this.authoritiesService.closeDialog();
    }

    this.notifierService.successNotification(
      successMessage?.message,
      successMessage?.status
    );
    this.authoritiesService.onGetAuthorities();
    ctx.patchState({
      responseMessage: successMessage,
    });
  }

  @Action(AuthoritiesError) ifErrorState(
    ctx: StateContext<AuthoritiesStateModel>,
    { errorMessage }: AuthoritiesError
  ) {
    this.notifierService.errorNotification(
      errorMessage?.message,
      errorMessage?.status
    );

    if (this.authoritiesService.getCurrentStatusDialog().length != 0) {
      this.authoritiesService.closeDialog();
    }

    ctx.patchState({
      responseMessage: errorMessage,
    });
  }
}
