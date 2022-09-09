import { Component, OnInit } from '@angular/core';
import { InstitutionService } from 'src/app/modules/services/module-services/institution.service';

@Component({
  selector: 'app-institution',
  templateUrl: './institution.component.html',
  styleUrls: ['./institution.component.css']
})
export class InstitutionComponent implements OnInit {

  constructor(private institutionService: InstitutionService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.institutionService.openDialog()
  }

}
