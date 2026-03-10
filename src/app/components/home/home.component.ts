import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface IPlanet {
  size: number,
  color: string,
  delay: number,
  moons: IMoon[]
}

interface IMoon {
  size: number,
  color: string,
  speed: number,
  delay: number,
  path: string
}

@Component({
  selector: 'app-home',
  imports: [CommonModule, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  public PLANET_COUNT = 8;
  public planets: IPlanet[] = [];

  public ngOnInit(): void {
    for (let i = 1; i <= this.PLANET_COUNT; i++) {
      const moonCount = Math.floor(Math.random() * 3) + 1;
      const planetSize = 80 + Math.random() * 150;
      const planetRadius = planetSize / 2;

      this.planets.push({
        size: planetSize,
        color: `hsl(${Math.random() * 360}, 50%, ${85 + Math.random() * 10}%)`,
        delay: -i * 20,
        moons: Array.from({ length: moonCount }).map(() => {
          const rx = planetRadius + 40 + Math.random() * 120;
          const ry = planetRadius + 30 + Math.random() * 100;

          return {
            size: 12 + Math.random() * 18,
            color: 'darkgray',
            speed: 6 + Math.random() * 12,
            delay: -Math.random() * 10,
            path: `ellipse(${rx}px ${ry}px at center)`
          };
        })
      });
    }
  }
}
