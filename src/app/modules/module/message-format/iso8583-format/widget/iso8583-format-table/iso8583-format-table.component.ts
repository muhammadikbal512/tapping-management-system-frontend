import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Iso8583FormatModel } from 'src/app/model/modules-model/iso8583-format.model';

import { MessageFormatService } from 'src/app/modules/services/module-services/message-format.service';
import Swal from 'sweetalert2';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';
import { EditDialogIso8583FormatComponent } from '../edit-dialog-iso8583-format/edit-dialog-iso8583-format.component';


@Component({
  selector: 'app-iso8583-format-table',
  templateUrl: './iso8583-format-table.component.html',
  styleUrls: ['./iso8583-format-table.component.css'],
})
export class Iso8583FormatTableComponent implements OnInit {
  isLoading = false;
  lists = [] as any;
  @Input('ELEMENT_DATA') ELEMENT_DATA!: Iso8583FormatModel[];
  displayedColumns: string[] = ['messageFormat', 'description', 'editRecord', 'deleteRecord'];
  dataSource = new MatTableDataSource<Iso8583FormatModel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort = new MatSort();

  constructor(private iso8583FormatService: MessageFormatService, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.showData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    
  }

  showData() {
    this.iso8583FormatService.getAllIso8583Format().subscribe((response) => {
      this.lists = response;
      this.dataSource.data = response as Iso8583FormatModel[];
      console.log(this.dataSource.data)
    });
  }

  
  onDeleteMsgFormat(id: number) {
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.iso8583FormatService
          .deleteIso8583Format(id)
          .subscribe((response) => {
            const Toast = Swal.mixin({
              toast: true,
              position: 'top-end',
              showConfirmButton: false,
              timer: 3000,
              timerProgressBar: true,
              didOpen: (toast) => {
                toast.addEventListener('mouseenter', Swal.stopTimer);
                toast.addEventListener('mouseleave', Swal.resumeTimer);
              },
            });
            Toast.fire({
              icon: 'success',
              title: 'Success !',
            });
            this.showData();
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

  announceSortChange(sortState: Sort) {
    // This example uses English messages. If your application supports
    // multiple language, you would internationalize these strings.
    // Furthermore, you can customize the message to add additional
    // details about the values being sorted.
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  editDialog(id: number) {
    this.dialog.open(EditDialogIso8583FormatComponent, {
      width: '500px' , 
    })
  }
}
