import { Component, OnInit } from '@angular/core';
import { TypeService } from 'src/app/modules/services/module-services/type.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css']
})
export class TypeComponent implements OnInit {

  constructor(private typeService: TypeService) { }

  ngOnInit(): void {
  }

  openDialog() {
    this.typeService.openDialog()
  }

}
