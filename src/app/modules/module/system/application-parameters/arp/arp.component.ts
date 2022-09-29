import { Component, OnInit } from '@angular/core';
import { AppParametersTableService } from 'src/app/modules/services/module-services/app-parameters-table.service';
import { AppParametersService } from 'src/app/modules/services/module-services/app-parameters.service';

@Component({
  selector: 'app-arp',
  templateUrl: './arp.component.html',
  styleUrls: ['./arp.component.css'],
})
export class ArpComponent implements OnInit {
  constructor(
    private appService: AppParametersService,
    private appTableService: AppParametersTableService
  ) {}

  ngOnInit(): void {}

  showDialog() {
    this.appService.openDialog();
  }

  refreshTable() {
    this.appService.getArpAllWithDelay();
  }

  onFilter() {
    this.appTableService.onFilter('search-filter')
  }
}
