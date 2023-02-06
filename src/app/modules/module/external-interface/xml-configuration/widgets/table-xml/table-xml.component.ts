import { Component, OnInit } from '@angular/core';
import { GridReadyEvent, RowClickedEvent } from 'ag-grid-community';
import { XmlTableService } from 'src/app/modules/services/module-services/external-interfaces/xml-table.service';
import { XmlService } from 'src/app/modules/services/module-services/external-interfaces/xml.service';

@Component({
  selector: 'app-table-xml',
  templateUrl: './table-xml.component.html',
  styleUrls: ['./table-xml.component.css'],
})
export class TableXmlComponent implements OnInit {
  constructor(
    private xmlTable: XmlTableService,
    private xmlService: XmlService
  ) {}
  ngOnInit(): void {
    this.getAllXmlConfig();
  }

  getAllXmlConfig() {
    this.xmlService.onGetAllXml();
  }

  onRowSelect(data: any) {
    this.xmlService.ExistingData = data.data
  }

  refreshTable() {
    this.getAllXmlConfig();
    this.xmlTable.loading = true;
  }

  showDialog() {
    this.xmlService.openDialog();
  }


  get xmlConfigs() {
    return this.xmlTable.xmlConfigs;
  }

  get cols() {
    return this.xmlTable.cols;
  }

  get loading() {
    return this.xmlTable.loading;
  }
}
