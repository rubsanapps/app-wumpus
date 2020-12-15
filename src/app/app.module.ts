import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { BoardComponent } from './board/board.component';
import { CellComponent } from './cell/cell.component';
import { CommandsComponent } from './commands/commands.component';
import { GameComponent } from './game/game.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './menu/menu.component';
import { ParametersComponent } from './parameters/parameters.component';
import { StatusComponent } from './status/status.component';

import { GameService } from './game.service';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    CellComponent, 
    CommandsComponent,
    GameComponent,
    MessagesComponent,
    MenuComponent,
    ParametersComponent,
    StatusComponent, 
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatBadgeModule,
    MatButtonModule,
    MatDialogModule,
    MatDividerModule,
    MatIconModule,
    MatGridListModule,
    MatTooltipModule
  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
