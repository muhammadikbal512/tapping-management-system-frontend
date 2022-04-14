import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Iso8583FieldModel } from 'src/app/model/modules-model/iso8583-field.model';
import { IsoFieldConfigurationService } from 'src/app/modules/services/module-services/iso-field-configuration.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-iso8583-field-table',
  templateUrl: './iso8583-field-table.component.html',
  styleUrls: ['./iso8583-field-table.component.css']
})
export class Iso8583FieldTableComponent implements OnInit {
  @Input('ELEMENT_DATA')ELEMENT_DATA!: Iso8583FieldModel[]
  displayedColumns: string[] = ['name', 'dialectTemplate', 'action']
  dataSource = new MatTableDataSource<Iso8583FieldModel>(this.ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort


  constructor(private isoFieldConfigurationService: IsoFieldConfigurationService) { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  onGetAllIsoFieldConfiguration() {
    this.isoFieldConfigurationService.getAllIsoFieldConfiguration().subscribe((response) => {
      this.dataSource.data = response
    })
  }

}
