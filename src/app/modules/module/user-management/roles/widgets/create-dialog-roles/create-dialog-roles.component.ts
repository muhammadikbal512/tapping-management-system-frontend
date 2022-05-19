import { Component, OnInit } from '@angular/core';
import { RolesService } from 'src/app/modules/services/module-services/roles.service';

@Component({
  selector: 'app-create-dialog-roles',
  templateUrl: './create-dialog-roles.component.html',
  styleUrls: ['./create-dialog-roles.component.css']
})
export class CreateDialogRolesComponent implements OnInit {

  constructor(public roleService: RolesService) { }

  ngOnInit(): void {
  }

  onCreateRole() {

  }

  onUpdateRole() {
    
  }

}
