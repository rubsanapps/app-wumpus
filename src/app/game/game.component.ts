import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})

export class GameComponent {

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {

    this.gameService.init();

  }

  ngOnInit() {
  }

  start(cells: number, wells: number, arrows: number): void {
    this.gameService.init();
  }

  restart() {
    this.gameService.init();
  }

  menu() {
    this.router.navigate(['/menu']);
  }

}

