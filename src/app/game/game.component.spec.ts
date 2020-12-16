// tslint:disable
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Observable, of as observableOf } from 'rxjs';

import { GameComponent } from './game.component';
import { GameService } from '../game.service';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable()
class MockGameService {
  init = function () { };
}

@Injectable()
class MockRouter {
  navigate() { };
}

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

describe('GameComponent', () => {
  let fixture;
  let component;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule, ReactiveFormsModule],
      declarations: [
        GameComponent,
        TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
        OneviewPermittedDirective
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      providers: [
        { provide: GameService, useClass: MockGameService },
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { url: 'url', params: {}, queryParams: {}, data: {} },
            url: observableOf('url'),
            params: observableOf({}),
            queryParams: observableOf({}),
            fragment: observableOf('fragment'),
            data: observableOf({})
          }
        },
        { provide: Router, useClass: MockRouter }
      ]
    }).overrideComponent(GameComponent, {

    }).compileComponents();
    fixture = TestBed.createComponent(GameComponent);
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

  it('should run #start()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.init = jest.fn();
    component.start({}, {}, {});
    expect(component.gameService.init).toHaveBeenCalled();
  });

  it('should run #restart()', async () => {
    component.gameService = component.gameService || {};
    component.gameService.init = jest.fn();
    component.restart();
    expect(component.gameService.init).toHaveBeenCalled();
  });

  it('should run #menu()', async () => {
    component.router = component.router || {};
    component.router.navigate = jest.fn();
    component.menu();
    expect(component.router.navigate).toHaveBeenCalled();
  });

});
