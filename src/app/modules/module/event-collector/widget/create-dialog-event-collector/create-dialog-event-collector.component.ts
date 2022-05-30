import { Component, OnInit } from '@angular/core';
import { EventCollectorService } from 'src/app/modules/services/module-services/event-collector.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-dialog-event-collector',
  templateUrl: './create-dialog-event-collector.component.html',
  styleUrls: ['./create-dialog-event-collector.component.css']
})
export class CreateDialogEventCollectorComponent implements OnInit {

  constructor(public eventService: EventCollectorService) { }

  ngOnInit(): void {
  }

  onCreateEventCollector() {

  }

  onUpdateEventCollector() {

  }

}
