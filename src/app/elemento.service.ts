import { Injectable } from '@angular/core';
import { signal, computed, effect } from '@angular/core';

export interface Elemento {
  nome: string;
  simbolo: string;
  numeroAtomico: number;
  numeroNeutrons: number;
}

@Injectable({
  providedIn: 'root'
})
export class ElementoService {
  elementoSelecionado = signal<Elemento | null>(null);
  elementoSelecionado1 = signal<Elemento | null>(null);
  elementoSelecionado2 = signal<Elemento | null>(null);

  massaAtomicaTotal = computed(() => {
    const elemento1 = this.elementoSelecionado1();
    const elemento2 = this.elementoSelecionado2();
    const massa1 = elemento1 ? elemento1.numeroAtomico + elemento1.numeroNeutrons : 0;
    const massa2 = elemento2 ? elemento2.numeroAtomico + elemento2.numeroNeutrons : 0;
    return massa1 + massa2;
  });

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1, numeroNeutrons: 0 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8, numeroNeutrons: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11, numeroNeutrons: 12 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17, numeroNeutrons: 18 }
  ];

  constructor() {
    effect(() => {
      const elemento = this.elementoSelecionado();
      if (elemento) {
        console.log(`Elemento selecionado: ${elemento.nome} (${elemento.simbolo})`);
      }
    });
  }

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionado.set(elemento);
  }

  obterElementoSelecionado() {
    return this.elementoSelecionado();
  }

  selecionarElemento1(elemento: Elemento) {
    this.elementoSelecionado1.set(elemento);
  }

  selecionarElemento2(elemento: Elemento) {
    this.elementoSelecionado2.set(elemento);
  }

  limparLog() {
    this.elementoSelecionado.set(null);
    this.elementoSelecionado1.set(null);
    this.elementoSelecionado2.set(null);
    console.clear();
    console.log('Log apagado manualmente.');
  }
}