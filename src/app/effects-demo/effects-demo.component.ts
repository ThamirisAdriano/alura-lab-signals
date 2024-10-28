import { Component, signal, effect } from '@angular/core';


interface QuimicoElemento { 
 nome: string;
 simbolo: string;
 numeroAtomico: number;
}

@Component({
  selector: 'app-effects-demo',
  templateUrl: './effects-demo.component.html',
  styleUrls: ['./effects-demo.component.css']
})
export class EffectsDemoComponent {
  elementoSelecionado = signal<QuimicoElemento | null>(null); 

  elementos: QuimicoElemento[] = [ 
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 },
  ];

  constructor() {
    effect(() => {
      const elemento = this.elementoSelecionado();
      if (elemento) {
        console.log(`Elemento selecionado: ${elemento.nome} (${elemento.simbolo})`);
      }
    });
  }

  selecionarElemento(elemento: QuimicoElemento) { 
    this.elementoSelecionado.set(elemento);
  }
 
 }
 

