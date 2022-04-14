import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { Iso8583DialectMsgTemplate } from 'src/app/model/modules-model/iso8583-dialect-msg-template.model';
import { Iso8583DialectService } from 'src/app/modules/services/module-services/iso8583-dialect.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-iso8583-dialect-table',
  templateUrl: './iso8583-dialect-table.component.html',
  styleUrls: ['./iso8583-dialect-table.component.css']
})
export class Iso8583DialectTableComponent implements OnInit {
  lists = [] as any;
  @Input('ELEMENT_DATA') ELEMENT_DATA!: Iso8583DialectMsgTemplate[];
  displayedColumns: string[] = ['nameType', 'msgFormat', 'description', 'editRecord', 'deleteRecord'];
  dataSource = new MatTableDataSource<Iso8583DialectMsgTemplate>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort = new MatSort();

  constructor(private _liveAnnouncer: LiveAnnouncer, private iso8583DialectService: Iso8583DialectService) {}

  ngOnInit(): void {
    this.showData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showData() {
    this.iso8583DialectService.getAllIso8583Dialect().subscribe((response) => {
      console.log(response)
      this.lists = response;
      this.dataSource.data = response as Iso8583DialectMsgTemplate[];
    });
  }

  onDeleteDialectMsgTemplate(id: number) {
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.iso8583DialectService
          .deleteIso8583Dialect(id)
          .subscribe((response) => {
            Swal.fire('Saved!', '', 'success');
            this.showData();
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

}
