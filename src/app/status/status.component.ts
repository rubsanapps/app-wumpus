import { Component, NgModule, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})


export class StatusComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.getMoves();
    this.getArrowsLeft();
  }

  getMoves(): number {
    return this.gameService.moves;
  }

  getArrowsLeft(): number {
    return this.gameService.arrowsLeft;
  }

}

