import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { XmlConfigModel } from 'src/app/model/modules-model/xml-config.model';
import { XmlConfigDispatch } from 'src/app/state-configuration/modules/external-interfaces/xml-config/xml-config.dispatch';
import { environment } from 'src/environments/environment';
import { CreateDialogXmlComponent } from '../../../module/external-interface/xml-configuration/widgets/create-dialog-xml/create-dialog-xml.component';
import { XmlTableService } from './xml-table.service';

@Injectable({
  providedIn: 'root',
})
export class XmlService {
  private apiURL: string = environment.core236;
  existingData:  XmlConfigModel = new XmlConfigModel();
  dialogConfig: MatDialogConfig = {
    width: '55%',
  };
  constructor(
    private dialog: MatDialog,
    private http: HttpClient,
    private xmlDispatch: XmlConfigDispatch,
    private xmlTableService: XmlTableService
  ) {}

  getAllXml() {
    return this.http.get<XmlConfigModel[]>(`${this.apiURL}/XML/list`);
  }

  getAllXmlWithDelay() {
    setTimeout(() => {
      this.onGetAllXml();
    }, 500);
  }

  onGetAllXml() {
    this.xmlDispatch._XmlConfigurationGetDispatch();    
  }

  openDialog() {
    this.dialog.open(CreateDialogXmlComponent, this.dialogConfig);
  }

  getCurrentStatusDialog() {
    this.dialog.openDialogs;
  }

  closeDialog() {
    this.dialog.closeAll();
  }

  set ExistingData(data: XmlConfigModel) {
    this.existingData = data;
  }
}
