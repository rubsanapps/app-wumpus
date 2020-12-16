import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Coord } from './coord';
import { CELLS } from './cells';
import { MessageService } from './message.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class GameService {


  private board: string[][] = [];

  private playerPosX = 0;
  private playerPosY = 0;
  private wumpusPosX = 0;
  private wumpusPosY = 0;
  private playerRotation = 0;

  cells = 5;
  wells = 3;
  arrows = 5;

  moves = 0;
  arrowsLeft = 5;

  isOver = false;
  isWin = false;
  isDead = false;
  goldTaken = false;
  boardChanged = new Subject<string[][]>();
  playerPosition$ = new BehaviorSubject<Coord>({ x: 0, y: 0 });
  coord = { x: 0, y: 0 }

  constructor(private messageService: MessageService) {
  }



  init(): void {

    this.isOver = false;
    this.isWin = false;
    this.isDead = false;
    this.goldTaken = false;
    this.moves = 0;
    this.arrowsLeft = this.arrows;

    this.messageService.clear();
    this.log("¡ Nueva partida !");

    this.setCleanBoard();
    this.initPlayer();
    this.initGold(this.coord);
    this.initWumpus(this.coord);
    this.initWells(this.coord);
    this.updatePerceptions(this.playerPosX, this.playerPosY);

  };

  setCleanBoard(): void {

    const rows = [];
    for (let x = 0; x < this.cells; x++) {
      const row = [];
      for (let y = 0; y < this.cells; y++) {
        row.push(CELLS.EMPTY);
      }
      rows.push(row);
    }
    this.board = rows;
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

  initPlayer(): void {
    this.board[this.cells - 1][0] = CELLS.PLAYER;
    this.playerPosX = this.cells - 1;
    this.playerPosY = 0;
    this.arrowsLeft = this.arrows;
    this.playerRotation = 0;
  }

  initGold(coord: Coord): void {
    coord = this.randomCoord();
    while (this.board[coord.x][coord.y] != CELLS.EMPTY) {
      coord = this.randomCoord();
    }
    this.board[coord.x][coord.y] = CELLS.GOLD;
  }

  initWumpus(coord: Coord): void {
    coord = this.randomCoord();
    while (this.board[coord.x][coord.y] != CELLS.EMPTY) {
      coord = this.randomCoord();
    }
    this.board[coord.x][coord.y] = CELLS.WUMPUS;
    this.wumpusPosX = coord.x;
    this.wumpusPosY = coord.y;
  }


  initWells(coord: Coord): void {

    for (let w = 0; w < this.wells; w++) {
      coord = this.randomCoord();
      while (this.board[coord.x][coord.y] != CELLS.EMPTY) {
        coord = this.randomCoord();
      }
      this.board[coord.x][coord.y] = CELLS.WELL;
    }
  }

  randomCoord(): Coord {
    return { x: this.getRandomNumber(0, this.cells - 1), y: this.getRandomNumber(0, this.cells - 1) };
  }

  getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  movePlayer() {
    if (!this.isOver) {
      this.moves++;
      switch (this.playerRotation) {
        case 0: this.step(this.playerPosX - 1, this.playerPosY); break;
        case 90: this.step(this.playerPosX, this.playerPosY + 1); break;
        case 180: this.step(this.playerPosX + 1, this.playerPosY); break;
        case 270: this.step(this.playerPosX, this.playerPosY - 1); break;
      }
      this.updatePerceptions(this.playerPosX, this.playerPosY);
    }
  }

  step(x, y) {

    if (x == this.cells - 1 && y == 0 && this.goldTaken == true) {
      this.board[x][y] = "PLAYER" + this.playerRotation;
      this.won();
    }

    if (x >= 0 && x < this.cells && y >= 0 && y < this.cells) {
      if (this.board[x][y] == "WELL" || this.board[x][y] == "WUMPUS") {
        this.gameOver();
      }
      if (this.board[x][y] == "GOLD") {
        this.goldTaken = true;
        this.board[x][y] = "REVEA";
        this.log("¡ Has encontrado el oro !");
      }
      this.board[this.playerPosX][this.playerPosY] = "REVEALED";
      this.board[x][y] = "PLAYER" + this.playerRotation;
      this.playerPosX = x;
      this.playerPosY = y;
    }


  }

  rotateLeft(): void {
    if (!this.isOver) {
      if (this.playerRotation != 0) {
        this.playerRotation -= 90;
      } else {
        this.playerRotation = 270;
      }
      this.updateRotation();
    }
  }

  rotateRight(): void {
    if (!this.isOver) {
      if (this.playerRotation != 270) {
        this.playerRotation += 90;
      } else {
        this.playerRotation = 0;
      }
      this.updateRotation();
    }
  }

  shootArrow() {
    if (!this.isOver) {
      if (this.arrowsLeft > 0) {
        this.arrowsLeft -= 1;
        switch (this.playerRotation) {
          case 0: if (this.playerPosX > this.wumpusPosX && this.playerPosY == this.wumpusPosY) { this.isDead = true }; break;
          case 90: if (this.playerPosX && this.wumpusPosX && this.playerPosY < this.wumpusPosY) { this.isDead = true }; break;
          case 180: if (this.playerPosX < this.wumpusPosX && this.playerPosY == this.wumpusPosY) { this.isDead = true }; break;
          case 270: if (this.playerPosX && this.wumpusPosX && this.playerPosY > this.wumpusPosY) { this.isDead = true }; break;
        }
        if (this.isDead) {
          this.log("¡ Has eliminado al wumpus y escuchas su GRITO !");
          this.board[this.wumpusPosX][this.wumpusPosY] = "EMPTY";
          this.wumpusPosX = -1;
          this.wumpusPosX = -1;
        } else {
          this.log("¡ Has disparado una flecha y has fallado !");
        }
      } else {
        this.log("¡ Te has quedado sin flechas !");
      }
    }
  }

  renderBoard(): string[][] {
    return this.board;
  }


  updateRotation() {
    this.board[this.playerPosX][this.playerPosY] = "PLAYER" + this.playerRotation;
  }

  checkPerception(cell: string) {
    if (!this.isOver) {
      switch (cell) {
        case "WUMPUS": this.log("Percibes el HEDOR del Wumpus."); break;
        case "GOLD": this.log("Percibes el BRILLO del Oro."); break;
        case "WELL": this.log("Percibes la BRISA del Pozo."); break;
      }
    }
  }

  updatePerceptions(x, y) {
    if (x - 1 >= 0)
      this.checkPerception(this.board[x - 1][y]);
    if (y - 1 >= 0)
      this.checkPerception(this.board[x][y - 1]);
    if (x + 1 < this.cells)
      this.checkPerception(this.board[x + 1][y]);
    if (y + 1 < this.cells)
      this.checkPerception(this.board[x][y + 1]);
  }

  gameOver() {
    this.log("¡ GAME OVER !");
    this.isOver = true;
  }

  won() {
    this.log("¡ Has ganado en " + this.moves + " movimientos !");
    this.isOver = true;
  }

  private log(message: string) {
    this.messageService.add(`- ${message}`);
  }


}


