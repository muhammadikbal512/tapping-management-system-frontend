import { Component, OnInit } from '@angular/core';
import { JsonConfigurationService } from 'src/app/modules/services/module-services/json-configuration.service';


@Component({
  selector: 'app-json-configuration',
  templateUrl: './json-configuration.component.html',
  styleUrls: ['./json-configuration.component.css']
})
export class JsonConfigurationComponent implements OnInit {

  constructor(private jsonService: JsonConfigurationService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.jsonService.openDialog();
  }

}
