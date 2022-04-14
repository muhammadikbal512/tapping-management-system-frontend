import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ChannelModel } from 'src/app/model/modules-model/channel.model';
import { ChannelService } from 'src/app/modules/services/module-services/channel.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-channel-table',
  templateUrl: './channel-table.component.html',
  styleUrls: ['./channel-table.component.css'],
})
export class ChannelTableComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: ChannelModel[]
  displayedColumns: string[] = ['channelId', 'ipAddress', 'port', 'onPremise', 'channelStatus', 'channelType', 'editRecord', 'deleteRecord']
  dataSource = new MatTableDataSource<ChannelModel>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator
  @ViewChild(MatSort, {static: true}) sort!: MatSort;
  
  constructor(private channelService: ChannelService) {}

  ngOnInit(): void {
    this.onGetAllChannel();
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  applyFilter($event: any) {
    const filterValue = ($event.target as HTMLInputElement).value;

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onGetAllChannel() {
    this.channelService.getAllChannel().subscribe((response) => {
      console.log(response)
      this.dataSource.data = response
    })
  }

  onDeleteChannel(id: number) {
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.channelService
          .deleteChannel(id)
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
            this.onGetAllChannel();
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  }
}
