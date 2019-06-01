import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ForumService, Message } from './forum.service';
import { UtilsService } from '../utils.service';

@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnDestroy {

  loading = false;
  error = false;

  messages: Message[] = [];
  messageForm: FormGroup;


  private destroy$ = new Subject<void>();

  constructor(
    private formBuilder: FormBuilder,
    private forumService: ForumService,
    private utils: UtilsService,
  ) { }

  ngOnInit() {
    this.getMessages();
    this.initForm();
  }

  initForm() {
    this.messageForm = this.formBuilder.group({
      title: ["", Validators.required],
      body: ["", Validators.required]
    });
  }

  getMessages(): void {
    this.error = false;
    this.loading = true;
    setTimeout(() => {
      this.forumService.getMessages()
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        messages => { 
          this.messages = messages;
          this.loading = false;
        },
        error => {
          this.loading = false;
          this.error = true;
        }
      );  
    }, 1000);
    
  }

  createMessage() {

    this.utils.setAsTouched(this.messageForm);

    if (this.messageForm.invalid) {
      return;
    }

    this.forumService.createMessage(this.messageForm.value)
    .pipe(takeUntil(this.destroy$))
    .subscribe(
      message => {
        this.messageForm.reset();
        this.messages.push(message);
      },
      error => {
        console.log(error);
      }
    )

  }

  ngOnDestroy() {
    if (window['pJSDom'] && window['pJSDom'][0]) {
      window['pJSDom'][0].pJS.fn.vendors.destroypJS();
    }
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
