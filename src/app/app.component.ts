import { Component } from '@angular/core';
import { GameService } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'app-wumpus';

  constructor(private gameService: GameService,) {

    this.gameService.init();

  }

  start() {
    this.gameService.init();
  }

  menu() {

  }

}
