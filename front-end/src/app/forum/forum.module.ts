import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { ForumComponent } from './forum.component';
import { CreateMessageComponent } from './create-message/create-message.component';
import { MessageListComponent } from './message-list/message-list.component';

const routes: Routes = [
  {
    path: '',
    component: ForumComponent
  }
];


@NgModule({
  declarations: [ForumComponent, CreateMessageComponent, MessageListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    ForumComponent,
    CreateMessageComponent,
    MessageListComponent,
  ]
})
export class ForumModule { }
