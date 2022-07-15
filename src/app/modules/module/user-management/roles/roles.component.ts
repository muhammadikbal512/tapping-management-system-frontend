import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';
import { RolesTableService } from 'src/app/modules/services/module-services/roles-table.service';

@Component({
  selector: 'app-roles',
  templateUrl: './roles.component.html',
  styleUrls: ['./roles.component.css'],
})
export class RolesComponent implements OnInit {
  constructor(
    private roleService: RolesService,
    private roleTableService: RolesTableService
  ) {}

  ngOnInit(): void {}

  onFilterTextBoxChange() {
    this.roleTableService.onFilter('search-input')
  }

  refreshTable() {
    this.roleService.getAllRolesWithDelay();
  }

  editDialog() {
    this.roleService.editDialog();
  }

  showDialog() {
    this.roleService.buttonStatus = 'create';
    this.roleService.openDialog();
  }
}
