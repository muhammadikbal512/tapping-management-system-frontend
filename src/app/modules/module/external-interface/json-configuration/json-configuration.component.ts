import { Component, OnInit } from '@angular/core';
import { JsonConfigurationTableService } from 'src/app/modules/services/module-services/json-configuration-table.service';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/json-configuration.service';

@Component({
  selector: 'app-json-configuration',
  templateUrl: './json-configuration.component.html',
  styleUrls: ['./json-configuration.component.css'],
})
export class JsonConfigurationComponent implements OnInit {
  constructor(
    private jsonService: JsonConfigurationService,
    private jsonTableService: JsonConfigurationTableService
  ) {}

  ngOnInit(): void {}

  searchTextBox() {
    this.jsonTableService.onFilter('search-input');
  }

  showDialog() {
    this.jsonService.buttonStatus = 'create'
    this.jsonService.openDialog();
  }
}
