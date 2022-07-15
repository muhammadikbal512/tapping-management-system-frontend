import { Component, OnInit } from '@angular/core';
import { SchemeServiceService } from 'src/app/modules/services/module-services/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/scheme-table.service';


@Component({
  selector: 'app-private-scheme',
  templateUrl: './private-scheme.component.html',
  styleUrls: ['./private-scheme.component.css']
})
export class PrivateSchemeComponent implements OnInit {

  constructor(private schemeService : SchemeServiceService, private schemeTableService: SchemeTableService) { }

  ngOnInit(): void {
  }

  searchFilterTextBox() {
    this.schemeTableService.onFilter('search-input');
  }

  showDialog() {
    this.schemeService.openDialog();
    
  }

}
