import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visualizza-studente',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './visualizza-studente.html',
  styleUrl: './visualizza-studente.css'
})
export class VisualizzaStudente {
  @Input() studente: any;  // <-- Dato ricevuto dal padre
  mostra = false;

  mostraMedia() {
    this.mostra = !this.mostra;
  }
}
