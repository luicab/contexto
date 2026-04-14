import { Component, signal } from '@angular/core';

interface Phase {
  number: number;
  title: string;
  description: string;
  color: string;
}

@Component({
  selector: 'app-landing',
  imports: [],
  templateUrl: './landing.html',
  styleUrl: './landing.scss',
})
export class Landing {
  protected readonly phases = signal<Phase[]>([
    {
      number: 1,
      title: 'Mapeo y Cambio de Creencias del CEO',
      description:
        'Trabajamos directamente con el líder para desbloquear el potencial oculto detrás de cada decisión estratégica.',
      color: 'var(--color-phase-1)',
    },
    {
      number: 2,
      title: 'Optimización de Procesos Existentes',
      description:
        'Rediseñamos tus operaciones actuales para extraer el máximo rendimiento sin cambiar tu infraestructura.',
      color: 'var(--color-phase-2)',
    },
    {
      number: 3,
      title: 'Optimización con Tecnología y Uso de IA',
      description:
        'Integramos inteligencia artificial y automatización para que tu negocio escale sin límites.',
      color: 'var(--color-phase-3)',
    },
  ]);
}
