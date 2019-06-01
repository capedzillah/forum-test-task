import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(
    private http: HttpClient,
  ) { }

  getMessages(): Observable<Message[]> {
    return this.http.get<Message[]>('http://localhost:3200/message');
  }

  createMessage(message: Message): Observable<Message> {

    const request = JSON.stringify(message);
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Message>('http://localhost:3200/message', request, { headers });
  }

}

export class Message {
  title: string;
  body: string;
  userName?: string;
}