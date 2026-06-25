import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  private ROWS = 30;
  private COLS = 30;

  public tiles: { row: number; col: number; active: boolean }[][] = Array.from({ length: this.ROWS }, (_, row) =>
    Array.from({ length: this.COLS }, (_, col) => ({
      row,
      col,
      active: false,
    }))
  );

  public ripple(row: number, col: number) {
    this.tiles.flat().forEach(tile => {
      const distance = Math.sqrt(Math.pow(tile.row - row, 2) + Math.pow(tile.col - col, 2));

      setTimeout(() => {
        tile.active = true;
        setTimeout(() => {
          tile.active = false;
        }, 300);
      }, distance * 50);
    });
  }
}
