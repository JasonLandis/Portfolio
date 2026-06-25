import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  rows = 30;
  cols = 30;

  tiles: { row: number, col: number, active: boolean }[][] = Array.from({ length: this.rows }, (_, row) =>
    Array.from({ length: this.cols }, (_, col) => ({
      row,
      col,
      active: false
    }))
  );

  ripple(clickedRow: number, clickedCol: number) {
    this.tiles.flat().forEach(tile => {

      const distance = Math.sqrt(
        Math.pow(tile.row - clickedRow, 2) +
        Math.pow(tile.col - clickedCol, 2)
      );

      setTimeout(() => {
        tile.active = true;

        setTimeout(() => {
          tile.active = false;
        }, 300);

      }, distance * 50);
    });
  }
}
