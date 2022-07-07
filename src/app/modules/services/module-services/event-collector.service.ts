import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomHttpResponseModel } from 'src/app/model/customHttpResponse-Model/custom-http-response.model';
import { EventCollectorInterface } from 'src/app/interface/modules/event-collector';
import { EventCollectorTableService } from './event-collector-table.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { EventCollectorDispatch } from 'src/app/state-configuration/modules/event-collector/event-collector.dispatch';
import { CreateDialogEventCollectorComponent } from '../../module/event-collector/widget/create-dialog-event-collector/create-dialog-event-collector.component';
import { EventCollectorModel } from 'src/app/model/modules-model/event-collector.model';
import { RowClickedEvent } from 'ag-grid-community';

@Injectable({
  providedIn: 'root',
})
export class EventCollectorService {
  private apiUrl = environment.core236;
  buttonStatus: string = '';
  existingData: EventCollectorModel = new EventCollectorModel();
  dialogConfig: MatDialogConfig = {
    autoFocus: false,
    width: '55%',
  };
  constructor(
    private http: HttpClient,
    private EventCollectorTableService: EventCollectorTableService,
    private dialog: MatDialog,
    private eventCollectorDispatch: EventCollectorDispatch
  ) {}

  getAllEventCollector() {}

  addEventCollector() {}

  deleteEventCollector() {}

  updateEventCollector() {}

  getEventCollectorWithDelay() {
    setTimeout(() => {
      this.onGetAllEventCollector()
    }, 500);
  }

  onGetAllEventCollector() {
    this.eventCollectorDispatch._EventCollectorGetDispatch();
  }

  // onCreateEventCollector(data: EventCollectorModel) {
  //   this.eventCollectorDispatch._EventCollectorAddDispatch(data);
  // }

  // onDeleteEventCollector() {
  //   this.eventCollectorDispatch._EventCollectorDeleteDispatch(
  //     this.existingData.id
  //   );
  // }

  // onUpdateEventCollector(data: FormData) {
  //   this.eventCollectorDispatch._EventCollectorUpdateDispatch(
  //     this.existingData.id,
  //     data,
  //     this.existingData
  //   );
  // }

  openDialog() {
    this.dialog.open(CreateDialogEventCollectorComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: RowClickedEvent) {
    this.existingData = data.data
  }
}
