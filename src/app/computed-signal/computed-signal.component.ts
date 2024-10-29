import { Component } from '@angular/core';
import { ElementoService, Elemento } from '../elemento.service';

@Component({
  selector: 'app-computed-signal',
  templateUrl: './computed-signal.component.html',
  styleUrls: ['./computed-signal.component.css']
})
export class ComputedSignalComponent {
  elementos: Elemento[];

  constructor(public elementoService: ElementoService) {
    this.elementos = this.elementoService.elementos;
  }

  selecionarElemento1(elemento: Elemento) {
    this.elementoService.selecionarElemento1(elemento);
  }

  selecionarElemento2(elemento: Elemento) {
    this.elementoService.selecionarElemento2(elemento);
  }

  elementoSelecionado1() {
    return this.elementoService.elementoSelecionado1();
  }

  elementoSelecionado2() {
    return this.elementoService.elementoSelecionado2();
  }

  massaAtomicaTotal() {
    return this.elementoService.massaAtomicaTotal();
  }
}