import { Component, OnInit, AfterViewInit } from '@angular/core';
import { SchemeServiceService } from 'src/app/modules/services/module-services/scheme-service.service';
import { SchemeTableService } from 'src/app/modules/services/module-services/scheme-table.service';

@Component({
  selector: 'app-private-scheme',
  templateUrl: './private-scheme.component.html',
  styleUrls: ['./private-scheme.component.css'],
})
export class PrivateSchemeComponent implements OnInit, AfterViewInit {
  constructor(
    private schemeService: SchemeServiceService,
    private schemeTableService: SchemeTableService
  ) {}

  
  ngAfterViewInit(): void {
    this.agStyleFooter();
  }

  ngOnInit(): void {}

  onPageSizeChanged() {
    const value = (<HTMLInputElement>document.getElementById('page-size'))
      .value;

    this.schemeTableService.gridApi?.paginationSetPageSize(Number(value));
  }

  agStyleFooter() {
    const ag = document.querySelector('.ag-paging-panel') as HTMLElement;
    ag.style.flexDirection = 'row-reverse';
    ag.style.alignItems = 'center';
    ag.style.justifyContent = 'center';

    ag.appendChild(document.querySelector('.page-size-container') as Node);
  }

  searchFilterTextBox() {
    this.schemeTableService.onFilter('search-input');
  }

  showDialog() {
    this.schemeService.openDialog();
  }
}
