import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { GameService } from '../game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cells = 5;
  wells = 3;
  arrows = 5;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  start(cells: number, wells: number, arrows: number): void {

    this.gameService.setCells(cells);
    this.gameService.setWells(wells);
    this.gameService.setArrows(arrows);
    this.router.navigate(['/game']);


  }

}


