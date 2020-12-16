// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { CommandsComponent } from './commands.component';
import { GameService } from '../game.service';

@Injectable()
class MockGameService { }

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({ name: 'phoneNumber' })
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('CommandsComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        CommandsComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: GameService, useClass: MockGameService }
      ]
    }).overrideComponent(CommandsComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(CommandsComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function () { };
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {

    component.ngOnInit();

  });

  it('should run #left()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.rotateLeft = jest.fn();
    component.left();
    expect(component.gameService.rotateLeft).toHaveBeenCalled();
  });

  it('should run #right()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.rotateRight = jest.fn();
    component.right();
    expect(component.gameService.rotateRight).toHaveBeenCalled();
  });

  it('should run #move()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.movePlayer = jest.fn();
    component.move();
    expect(component.gameService.movePlayer).toHaveBeenCalled();
  });

  it('should run #shoot()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.shootArrow = jest.fn();
    component.shoot();
    expect(component.gameService.shootArrow).toHaveBeenCalled();
  });

});
