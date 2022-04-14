import { Component, OnInit, Input, ViewChild, TemplateRef } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DashboardService } from 'src/app/modules/services/module-services/dashboard.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatDialog } from '@angular/material/dialog';

export interface InterfaceModel {
  position: number;
  description: string;
  address: string;
  netmask: string;
  broadcastAddress: string;
  star: string;
}


@Component({
  selector: 'app-interface-list',
  templateUrl: './interface-list.component.html',
  styleUrls: ['./interface-list.component.css']
})
export class InterfaceListComponent implements OnInit {
  interfaceDialogTitle: string[] = ['IP Address', 'Netmask', 'Broadcast Address']
  @Input('ELEMENT_DATA') ELEMENT_DATA!: InterfaceModel[];
  displayedColumns: string[] = ['no', 'description', 'ipAddress', 'action'];
  dataSource = new MatTableDataSource<InterfaceModel>(this.ELEMENT_DATA);
  interfaceList: InterfaceModel[] = [];
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort = new MatSort();

  constructor(private dashboardService: DashboardService, private _liveAnnouncer: LiveAnnouncer, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.getInterfacesList();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  getInterfacesList() {
    this.dashboardService.getListInterfaces().subscribe({
      next: this.dataHandler.bind(this),
      error: err => console.log(err.message)
    })
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  dataHandler(response: any) {
    const keyValue = Object.keys(response)[0];
    let removeFirstAndLastEl = keyValue.substring(1, keyValue.length - 1)
    const arrayKeyValue = removeFirstAndLastEl.split(",");
    for (let i = 0; i < arrayKeyValue.length; i++) {
      const value = Array.from(response[keyValue]);
      if (i == 0) {
        arrayKeyValue[i].substring(1);
      }
      const eachValue = value[i] as String;
      const valueToArray = eachValue.split("] ");
      let description: string = arrayKeyValue[i];
      let address: string = '';
      let netmask: string = '';
      let broadcastAddress: string = '';
      valueToArray.forEach((x) => {
        if (x.includes('address')) {
          address = x.replace('address: [/', '');
        }

        if (x.includes('netmask')) {
          netmask = x.replace('netmask: [/', '');
        }

        if (x.includes('broadcastAddr')) {
          broadcastAddress = x.replace('broadcastAddr: [/', '');
        }
      })
      const dataInterface: InterfaceModel = {
        position: i + 1,
        description: description,
        address: address,
        netmask: netmask,
        broadcastAddress: broadcastAddress,
        star: ''
      };
      this.interfaceList.push(dataInterface);
    }
    this.dataSource = new MatTableDataSource(this.interfaceList);
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  openDialog(interfacesDialog: TemplateRef<any>) {
    this.dialog.open(interfacesDialog);
  }

  dialogInterfaceValue(title: string, index: number) {
    switch (title) {
      case 'IP Address':
        return this.interfaceList[index].address;
      case 'Netmask':
        return this.interfaceList[index].netmask;
      case 'Broadcast Address':
        return this.interfaceList[index].broadcastAddress
      default:
        return 'No Data';
    }
  }

}
