// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { ParametersComponent } from './parameters.component';
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

describe('ParametersComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, ReactiveFormsModule ],
      declarations: [
        ParametersComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [ CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA ],
      providers: [
        { provide: GameService, useClass: MockGameService }
      ]
    }).overrideComponent(ParametersComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(ParametersComponent);
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
    component.getCells = jest.fn();
    component.getWells = jest.fn();
    component.getArrows = jest.fn();
    component.ngOnInit();
    expect(component.getCells).toHaveBeenCalled();
    expect(component.getWells).toHaveBeenCalled();
    expect(component.getArrows).toHaveBeenCalled();
  });

  it('should run #getCells()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.cells = 'cells';
    component.getCells();

  });

  it('should run #getWells()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.wells = 'wells';
    component.getWells();

  });

  it('should run #getArrows()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.arrows = 'arrows';
    component.getArrows();

  });

});
