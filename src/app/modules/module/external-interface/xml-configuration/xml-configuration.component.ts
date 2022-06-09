import { Component, OnInit } from '@angular/core';
import { XmlService } from 'src/app/modules/services/module-services/xml.service';


@Component({
  selector: 'app-xml-configuration',
  templateUrl: './xml-configuration.component.html',
  styleUrls: ['./xml-configuration.component.css']
})
export class XmlConfigurationComponent implements OnInit {

  constructor(private xmlService: XmlService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.xmlService.openDialog();
  }

}
