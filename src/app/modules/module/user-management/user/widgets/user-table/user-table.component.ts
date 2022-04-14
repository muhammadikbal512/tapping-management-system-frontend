import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserModel } from 'src/app/model/user-model/user.model';
import Swal from 'sweetalert2';
import { UserService } from 'src/app/modules/services/module-services/user.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  @Input('ELEMENT_DATA') ELEMENT_DATA!: UserModel[];
  displayedColumns: string[] = ['username', 'email', 'role', 'lastLogin', 'active', 'actions'];
  dataSource = new MatTableDataSource<UserModel>(this.ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort = new MatSort();
  lists: any;

  constructor(private _liveAnnouncer: LiveAnnouncer, private userService: UserService) {}

  ngOnInit(): void {
    this.showData();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  showData() {
    this.userService.getAllUsers().subscribe((response) => {
      this.lists = response;
      this.dataSource.data = response as UserModel[];
      console.log(this.dataSource.data)
    });
  }

  deleteUser(id: number) {
    Swal.fire({
      title: 'Are you sure ?',
      showDenyButton: true,
      confirmButtonText: 'Delete',
      denyButtonText: `Cancel`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.userService
          .deleteUser(id)
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
