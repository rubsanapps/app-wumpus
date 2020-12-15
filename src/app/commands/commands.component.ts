import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-commands',
  templateUrl: './commands.component.html',
  styleUrls: ['./commands.component.css']
})
export class CommandsComponent implements OnInit {

  constructor(private gameService: GameService,) {


  }

  ngOnInit(): void {
  }

  left() {
    this.gameService.rotateLeft();
  }

  right() {
    this.gameService.rotateRight();
  }

  move() {
    this.gameService.movePlayer();
  }

  shoot() {
    this.gameService.shootArrow();
  }

  exit() {

  }

}
