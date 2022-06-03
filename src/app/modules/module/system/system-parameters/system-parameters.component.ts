import { Component, OnInit } from '@angular/core';
import { SystemParametersService } from 'src/app/modules/services/module-services/system-parameters.service';


@Component({
  selector: 'app-system-parameters',
  templateUrl: './system-parameters.component.html',
  styleUrls: ['./system-parameters.component.css']
})
export class SystemParametersComponent implements OnInit {

  constructor(public systemService: SystemParametersService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.systemService.openDialog();
  }

}
