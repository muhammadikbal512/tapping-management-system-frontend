import { Component, OnInit } from '@angular/core';
import { SchemeServiceService } from 'src/app/modules/services/module-services/scheme-service.service';


@Component({
  selector: 'app-private-scheme',
  templateUrl: './private-scheme.component.html',
  styleUrls: ['./private-scheme.component.css']
})
export class PrivateSchemeComponent implements OnInit {

  constructor(private schemeService : SchemeServiceService) { }

  ngOnInit(): void {
  }

  showDialog() {
    this.schemeService.openDialog();
    
  }

}
