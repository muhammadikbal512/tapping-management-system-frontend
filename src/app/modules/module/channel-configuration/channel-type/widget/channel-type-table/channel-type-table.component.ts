import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChannelTypeModel } from 'src/app/model/modules-model/channel-type.model';
import { ChannelTypeService } from 'src/app/modules/services/module-services/channel-type.service';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-channel-type-table',
  templateUrl: './channel-type-table.component.html',
  styleUrls: ['./channel-type-table.component.css']
})
export class ChannelTypeTableComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: ChannelTypeModel[]
  displayedColumns: string[] = ['channelType', 'msgTemplate', 'description', 'editRecord', 'deleteRecord']
  dataSource = new MatTableDataSource<ChannelTypeModel>(this.ELEMENT_DATA)
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort) sort!: MatSort


  constructor(private channelTypeService: ChannelTypeService) { }

  ngOnInit(): void {
    this.onGetAllChannelTypeList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  onGetAllChannelTypeList() {
    this.channelTypeService.getAllChannelTypeList().subscribe((response) => {
      console.log(response)
      this.dataSource.data = response
    })
  }
  
  onDeleteChannelType(id: number) {
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.channelTypeService
          .deleteChannelType(id)
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
            this.onGetAllChannelTypeList();
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }

}
