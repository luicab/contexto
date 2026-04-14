import { Component, signal } from '@angular/core';

type Label = 'I' | 'J' | 'D';

@Component({
  selector: 'app-recursos',
  imports: [],
  templateUrl: './recursos.html',
  styleUrl: './recursos.scss',
})
export class Recursos {
  private static readonly LABELS: Label[] = ['I', 'J', 'D'];
  private static readonly MAX_CONSECUTIVE = 3;

  /** Alfabeto 5x5 — excluye LL, Ñ y W */
  protected readonly alphabet = signal<string[][]>([
    ['A', 'B', 'C', 'D', 'E'],
    ['F', 'G', 'H', 'I', 'J'],
    ['K', 'L', 'M', 'N', 'O'],
    ['P', 'Q', 'R', 'S', 'T'],
    ['U', 'V', 'X', 'Y', 'Z'],
  ]);

  /** Matriz de indicadores I/J/D */
  protected readonly labels = signal<Label[][]>(this.generateLabels());

  /** Regenera solo las indicaciones I/J/D */
  regenerate(): void {
    this.labels.set(this.generateLabels());
  }

  /**
   * Genera una matriz 5x5 de I/J/D donde ninguna letra
   * se repite más de 3 veces consecutivas (recorrido fila por fila).
   */
  private generateLabels(): Label[][] {
    const result: Label[][] = [[], [], [], [], []];
    let lastChar: Label | null = null;
    let repeatCount = 0;

    for (let row = 0; row < 5; row++) {
      for (let col = 0; col < 5; col++) {
        let newChar: Label;

        do {
          newChar =
            Recursos.LABELS[
              Math.floor(Math.random() * Recursos.LABELS.length)
            ];
        } while (newChar === lastChar && repeatCount >= Recursos.MAX_CONSECUTIVE);

        if (newChar === lastChar) {
          repeatCount++;
        } else {
          repeatCount = 1;
        }

        lastChar = newChar;
        result[row][col] = newChar;
      }
    }

    return result;
  }
}
