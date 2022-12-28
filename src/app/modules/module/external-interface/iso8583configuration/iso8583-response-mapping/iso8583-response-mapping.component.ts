import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ResponseMappingTableService } from 'src/app/modules/services/module-services/response-mapping-table.service';
import { ResponseMappingService } from 'src/app/modules/services/module-services/response-mapping.service';

@Component({
  selector: 'app-iso8583-response-mapping',
  templateUrl: './iso8583-response-mapping.component.html',
  styleUrls: ['./iso8583-response-mapping.component.css'],
})
export class Iso8583ResponseMappingComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
