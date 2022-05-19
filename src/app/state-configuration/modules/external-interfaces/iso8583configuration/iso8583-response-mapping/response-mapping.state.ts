import { ResponseMappingModel } from 'src/app/model/modules-model/response-mapping.model';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { Inject, Injectable } from '@angular/core';
import { NotificationService } from 'src/app/modules/services/notification-service/notification.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import {
  ResponseMappingGet,
  ResponseMappingAdd,
  ResponseMappingDelete,
  ResponseMappingErrorState,
  ResponseMappingSuccessState,
  ResponseMappingUpdate,
} from './response-mapping.action';
import { tap } from 'rxjs';
import { catchError } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';


export class ResponseMappingStateModel {
    responseMappings: ResponseMappingModel[] = [];
    responseMessage: CustomHttpResponseModel | undefined;
}

@State<ResponseMappingStateModel>({
    name: 'responseMappingState',
    defaults: {
    responseMappings: [],
    responseMessage: undefined,
    },
})
@Injectable()
export class ResponseMappingState {
    
}