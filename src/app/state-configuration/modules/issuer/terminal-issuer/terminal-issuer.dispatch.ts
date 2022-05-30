import { Injectable } from '@angular/core';
import { Dispatch } from '@ngxs-labs/dispatch-decorator';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import {
  TerminalIssuerGet,
  TerminalIssuerAdd,
  TerminalIssuerDelete,
  TerminalIssuerUpdate,
  TerminalIssuerSuccessState,
  TerminalIssuerErrorState,
} from './terminal-issuer.action';
import { IssuerTerminalModel } from 'src/app/model/modules-model/issuer-terminal.model';


export class TerminalIssuerDispatch {
    @Dispatch()
    public _TerminalIssuerGetDispatch() {
        return new TerminalIssuerGet();
    }

    @Dispatch()
    public _TerminalIssuerAddDispatch(payload: IssuerTerminalModel) {
        return new TerminalIssuerAdd(payload);
    }

    @Dispatch()
    public _TerminalIssuerDeleteDispatch(id: number) {
        return new TerminalIssuerDelete(id);
    }

    @Dispatch()
    public _TerminalIssuerUpdateDispatch(id: number, payload: FormData, stateData: IssuerTerminalModel) {
        return new TerminalIssuerUpdate(id, payload, stateData);
    }

    @Dispatch()
    public _TerminalIssuerSuccessState(message: CustomHttpResponseModel) {
        return new TerminalIssuerSuccessState(message);
    }

    @Dispatch()
    public _TerminalIssuerErrorState(message: CustomHttpResponseModel) {
        return new TerminalIssuerErrorState(message);
    }
}
