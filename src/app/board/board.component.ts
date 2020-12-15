import { Component, Input, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})

export class BoardComponent implements OnInit {

  board: string[][];

  constructor(private gameService: GameService,) {
  }

  ngOnInit() {
    this.board = this.gameService.renderBoard();
  }

}
