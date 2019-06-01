import { Component, OnInit, Input } from '@angular/core';
import { Message } from '../forum.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent implements OnInit {

  @Input() messages: Message[];

  userName: string;
  constructor() { }

  ngOnInit() {
    const userName = localStorage.getItem('login');
    this.userName = userName || '';
  }

}
