import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { CellComponent } from './cell/cell.component';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { CommandsComponent } from './commands/commands.component';
import { MessagesComponent } from './messages/messages.component';
import { MenuComponent } from './menu/menu.component';
import { StatusComponent } from './status/status.component';
import { ParametersComponent } from './parameters/parameters.component';
import { GameComponent } from './game/game.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    CellComponent,
    BoardComponent,
    CommandsComponent,
    MessagesComponent,
    MenuComponent,
    StatusComponent,
    ParametersComponent,
    GameComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatBadgeModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule,
    MatDividerModule,
    MatDialogModule


  ],
  providers: [GameService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
