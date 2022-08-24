import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Action, State, StateContext, Selector } from '@ngxs/store';
import { catchError, tap } from 'rxjs';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { NdcModel } from 'src/app/model/modules-model/ndc.model';
import { NdcTableService } from 'src/app/modules/services/module-services/ndc-table.service';
import { NdcService } from 'src/app/modules/services/module-services/ndc.service';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import {
  NdcGet,
  NdcSuccessState,
  NdcErrorState,
  NdcDelete,
} from './ndc.action';

export class NdcStateModel {
  NDC: NdcModel[] = [];
  responseMessage: CustomHttpResponseModel | undefined;
}

@State<NdcStateModel>({
  name: 'Ndc',
  defaults: {
    NDC: [],
    responseMessage: undefined,
  },
})
@Injectable()
export class NdcState {
  constructor(
    private notifierService: NotificationService,
    private ndcService: NdcService,
    private ndcTableService: NdcTableService
  ) {}

  @Selector()
  static NDC(state: NdcStateModel) {
    return state.NDC;
  }

  @Selector()
  static responseMessage(state: NdcStateModel) {
    return state.responseMessage;
  }

  @Action(NdcGet, { cancelUncompleted: true }) getDataFromState(
    ctx: StateContext<NdcStateModel>
  ) {
    return this.ndcService.getAllNdc().pipe(
      tap((response) => {
        if (response.length != 0) {
          this.ndcTableService.showTableLoading();
          this.ndcTableService.setRowData(response);
        } else {
          this.ndcTableService.showNoRowData();
          this.ndcTableService.setRowData(response);
        }

        ctx.patchState({
          ...ctx.getState(),
          NDC: response,
        });
      }),
      catchError((response: HttpErrorResponse) => {
        return ctx.dispatch(new NdcErrorState(response.error));
      })
    );
  }

  @Action(NdcDelete, { cancelUncompleted: true }) deleteDataFromState(
    ctx: StateContext<NdcStateModel>,
    { id }: NdcDelete
  ) {
    return this.ndcService.deleteNdc(id).pipe(
      tap((response) => {
        ctx.dispatch(new NdcSuccessState(response));
        const filteredData = ctx.getState().NDC.filter((data) => data.id !== id);
        ctx.patchState({
          ...ctx.getState(),
          NDC: filteredData,
          responseMessage: response,
        });
      })
    );
  }

  @Action(NdcSuccessState) ifStateSucccess(
    ctx: StateContext<NdcStateModel>,
    { successMessage }: NdcSuccessState
  ) {
    this.notifierService.successNotification(
      successMessage.message,
      successMessage.httpStatusCode
    )
    this.ndcService.onGetAllNdc();
    ctx.patchState({
      responseMessage: successMessage
    })
  }

  @Action(NdcErrorState) ifStateError(
    ctx: StateContext<NdcStateModel>,
    { errorMessage }: NdcErrorState
  ) {
    this.notifierService.errorNotification(
      errorMessage.message,
      errorMessage.httpStatusCode
    );

    if (this.ndcTableService.gridApi.getRenderedNodes().length == 0) {
      this.ndcTableService.showNoRowData();
    } else {
      this.ndcTableService.showTableLoading();
    }

    ctx.patchState({
      responseMessage: errorMessage
    })
  }
}
