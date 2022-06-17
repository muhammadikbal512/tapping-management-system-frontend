import { Component, OnInit } from '@angular/core';
import { EventCollectorTableService } from '../../services/module-services/event-collector-table.service';
import { EventCollectorService } from '../../services/module-services/event-collector.service';

@Component({
  selector: 'app-event-collector',
  templateUrl: './event-collector.component.html',
  styleUrls: ['./event-collector.component.css']
})
export class EventCollectorComponent implements OnInit {

  constructor(public eventCollectorService: EventCollectorService, private eventCollectorTableService: EventCollectorTableService) { }

  ngOnInit(): void {
  }

  onTextBoxChange() {
    this.eventCollectorTableService.onFilter('search-filter');
  }

  refreshTable() {
    this.eventCollectorService.getEventCollectorWithDelay();
  }

  showDialog() {
    this.eventCollectorService.buttonStatus = 'create';
    this.eventCollectorService.openDialog();
  }

}