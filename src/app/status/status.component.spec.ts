// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { StatusComponent } from './status.component';
import { GameService } from '../game.service';

@Injectable()
class MockGameService {}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective {
  @Input() oneviewPermitted;
}

@Pipe({name: 'translate'})
class TranslatePipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'phoneNumber'})
class PhoneNumberPipe implements PipeTransform {
  transform(value) { return value; }
}

@Pipe({name: 'safeHtml'})
class SafeHtmlPipe implements PipeTransform {
  transform(value) { return value; }
}

describe('StatusComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        StatusComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: GameService, useClass: MockGameService }
      ]
    }).overrideComponent(StatusComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(StatusComponent);
    component = fixture.debugElement.componentInstance;
  });

  afterEach(() => {
    component.ngOnDestroy = function() {};
    fixture.destroy();
  });

  it('should run #constructor()', async () => {
    expect(component).toBeTruthy();
  });

  it('should run #ngOnInit()', async () => {
    component.getMoves = jest.fn();
    component.getArrowsLeft = jest.fn();
    component.ngOnInit();
    expect(component.getMoves).toHaveBeenCalled();
    expect(component.getArrowsLeft).toHaveBeenCalled();
  });

  it('should run #getMoves()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.moves = 'moves';
    component.getMoves();

  });

  it('should run #getArrowsLeft()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.arrowsLeft = 'arrowsLeft';
    component.getArrowsLeft();

  });

});
