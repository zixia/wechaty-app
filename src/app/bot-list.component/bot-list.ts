import { Component } from '@angular/core'
import { RouterConfig } from '@angular/router'

@Component({
  moduleId: module.id,
  selector: 'bot-list',
  templateUrl: 'bot-list.html',
  styleUrls: ['bot-list.css']
})
export class BotListComponent {}

export const BOT_LIST_ROUTES: RouterConfig = [
  {
    path: 'bot-list',
    component: BotListComponent
  }
];