import { Action, State, StateContext, Selector } from '@ngxs/store';
import { AcquirerTerminalModel } from 'src/app/model/modules-model/acquirer-terminal.model';
import {
  AcquirerTerminalGet,
  AcquirerTerminalAdd,
  AcquirerTerminalDelete,
  AcquirerTerminalErrorState,
  AcquirerTerminalSuccessState,
  AcquirerTerminalUpdate,
} from './acquirer-terminal.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { Injectable } from '@angular/core';


export class AcquirerTerminalStateModel {
    AcquirerTerminals: AcquirerTerminalModel[] = [];
    responseMessage: CustomHttpResponseModel | undefined;
}

State<AcquirerTerminalStateModel>({
    name: 'acquirerTerminal',
    defaults: {
        AcquirerTerminals: [],
        responseMessage: undefined
    }
})

@Injectable()
export class AcquirerTerminalState {
    @Selector()
    static _AcquirerTerminals(state: AcquirerTerminalStateModel) {
        return state.AcquirerTerminals;
    }

    @Selector()
    static _responseMessage(state: AcquirerTerminalStateModel) {
        return state.responseMessage;
    }
}
