import {Component, OnInit} from '@angular/core';
import {Session} from "../../../models/Session";
import {SessionService} from "../../../services/session.service";

@Component({
  selector: 'app-session-table',
  templateUrl: './session-table.component.html',
  styleUrls: ['./session-table.component.css']
})
export class SessionTableComponent implements OnInit {
  sessions: Session[] = [];

  constructor(private sessionService: SessionService) {
  }

  getSessions(): void {
    this.sessions = this.sessionService.getSessions()
  }

  ngOnInit(): void {
    this.getSessions()
  }
}
