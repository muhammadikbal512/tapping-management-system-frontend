import { Component } from '@angular/core';
import { AgRendererComponent } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';

@Component({
  selector: 'app-action-button-event-collector',
  templateUrl: './action-button-event-collector.component.html',
  styleUrls: ['./action-button-event-collector.component.css']
})
export class ActionButtonEventCollectorComponent implements AgRendererComponent {

  constructor() { }
  refresh(params: ICellRendererParams): boolean {
    throw new Error('Method not implemented.');
  }
  agInit(params: ICellRendererParams): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
  }

  editButton() {

  }

  deleteButton(event: Event) {

  }

}
