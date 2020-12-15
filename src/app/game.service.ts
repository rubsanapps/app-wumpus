import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  private board: string[][] = [];

  cells = 5;
  wells = 3;
  arrows = 5;

  moves = 0;
  arrowsLeft = 5;

  constructor() { }

  init(): void {

    console.log("GameService: Init");

  };

  renderBoard(): string[][] {
    return this.board;
  }

  setCells(cells: number): void {
    this.cells = cells;
  }
  setWells(wells: number): void {
    this.wells = wells;
  }
  setArrows(arrows: number): void {
    this.arrows = arrows;
  }

  getCells(): number {
    return this.cells;
  }
  getWells(): number {
    return this.wells;
  }
  getArrows(): number {
    return this.arrows;
  }
}
