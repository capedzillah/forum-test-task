import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-message',
  templateUrl: './create-message.component.html',
  styleUrls: ['./create-message.component.scss']
})
export class CreateMessageComponent implements OnInit {

  @Input() messageForm: FormBuilder;

  constructor() { }

  ngOnInit() {
  }


}
