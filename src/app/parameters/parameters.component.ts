import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-parameters',
  templateUrl: './parameters.component.html',
  styleUrls: ['./parameters.component.css']
})
export class ParametersComponent implements OnInit {

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
  }
  getCells(): number {
    return this.gameService.cells;
  }

  getWells(): number {
    return this.gameService.wells;
  }

  getArrows(): number {
    return this.gameService.arrows;
  }
}
