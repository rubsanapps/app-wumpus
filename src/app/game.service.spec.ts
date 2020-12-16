import { Injectable } from '@angular/core';
import { GameService } from './game.service';
import { MessageService } from './message.service';

@Injectable()
class MockMessageService {}

describe('GameService', () => {
  let service;

  beforeEach(() => {
    service = new GameService(new MessageService());

    const rows = [];
    for (let x = 0; x < 5; x++) {
      const row = [];
      for (let y = 0; y <5; y++) {
        row.push("EMPTY");
      }
      rows.push(row);
    }
    service.board = rows;
    service.cells = 5;
    service.wells = 3;
    service.arrows = 5;

  });

  it('should run #init()', async () => {
    service.messageService = service.messageService || {};
    service.messageService.clear = jest.fn();
    service.log = jest.fn();
    service.setCleanBoard = jest.fn();
    service.initPlayer = jest.fn();
    service.initGold = jest.fn();
    service.initWumpus = jest.fn();
    service.initWells = jest.fn();
    service.updatePerceptions = jest.fn();
    service.init();
    expect(service.messageService.clear).toHaveBeenCalled();
    expect(service.log).toHaveBeenCalled();
    expect(service.setCleanBoard).toHaveBeenCalled();
    expect(service.initPlayer).toHaveBeenCalled();
    expect(service.initGold).toHaveBeenCalled();
    expect(service.initWumpus).toHaveBeenCalled();
    expect(service.initWells).toHaveBeenCalled();
    expect(service.updatePerceptions).toHaveBeenCalled();
  });

  it('should run #setCleanBoard()', async () => {

    service.setCleanBoard();

  });

  it('should run #setCells()', async () => {

    service.setCells({});

  });

  it('should run #setWells()', async () => {

    service.setWells({});

  });

  it('should run #setArrows()', async () => {

    service.setArrows({});

  });

  it('should run #getCells()', async () => {

    service.getCells();

  });

  it('should run #getWells()', async () => {

    service.getWells();

  });

  it('should run #getArrows()', async () => {

    service.getArrows();

  });

  it('should run #initPlayer()', async () => {

    service.initPlayer();

  });

  it('should run #initGold()', async () => {
    service.initGold();
  });

  it('should run #initWumpus()', async () => {
    service.initWumpus();
  });

  it('should run #initWells()', async () => {
    service.initWells();
  });

  it('should run #randomCoord()', async () => {
    service.getRandomNumber = jest.fn();
    service.randomCoord();
    expect(service.getRandomNumber).toHaveBeenCalled();
  });

  it('should run #getRandomNumber()', async () => {

    service.getRandomNumber({}, {});

  });

  it('should run #movePlayer()', async () => {
    service.step = jest.fn();
    service.updatePerceptions = jest.fn();
    service.movePlayer();
    expect(service.step).toHaveBeenCalled();
    expect(service.updatePerceptions).toHaveBeenCalled();
  });

  it('should run #step()', async () => {
    service.board = service.board || {};
    service.board.x = {
      y: {}
    };
    service.step({}, {});
  });

  it('should run #rotateLeft()', async () => {
    service.updateRotation = jest.fn();
    service.rotateLeft();
    expect(service.updateRotation).toHaveBeenCalled();
  });

  it('should run #rotateRight()', async () => {
    service.updateRotation = jest.fn();
    service.rotateRight();
    expect(service.updateRotation).toHaveBeenCalled();
  });

  it('should run #renderBoard()', async () => {

    service.renderBoard();

  });

  it('should run #updateRotation()', async () => {

    service.updateRotation();

  });

  it('should run #checkPerception()', async () => {
    service.log = jest.fn();
    service.checkPerception("WUMPUS");
    expect(service.log).toHaveBeenCalled();
  });

  it('should run #updatePerceptions()', async () => {
    service.checkPerception = jest.fn();
   // service.board = service.board || {};
   // service.board.y = '0';
   // service.board.x = '0';
    service.updatePerceptions(0, 0);
    expect(service.checkPerception).toHaveBeenCalled();
  });

  it('should run #gameOver()', async () => {
    service.log = jest.fn();
    service.gameOver();
    expect(service.log).toHaveBeenCalled();
  });

  it('should run #won()', async () => {
    service.log = jest.fn();
    service.won();
    expect(service.log).toHaveBeenCalled();
  });

  it('should run #log()', async () => {
    service.messageService = service.messageService || {};
    service.messageService.add = jest.fn();
    service.log({});
    expect(service.messageService.add).toHaveBeenCalled();
  });

});
