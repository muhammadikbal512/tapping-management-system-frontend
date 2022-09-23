import { Component, OnInit } from '@angular/core';
import { UserGroupService } from 'src/app/modules/services/module-services/user-group.service';
@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.css']
})
export class UserGroupComponent implements OnInit {

  constructor(private UserGroupService: UserGroupService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.UserGroupService.buttonStatus = 'create'
    this.UserGroupService.openDialog()
  }

}
