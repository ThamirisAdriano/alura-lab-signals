import { Component, computed } from '@angular/core';
import { ElementoService } from './../elemento.service';

@Component({
  selector: 'app-signals-intro',
  templateUrl: './signals-intro.component.html',
  styleUrls: ['./signals-intro.component.css']
})
export class SignalsIntroComponent {

  constructor(public elementoService: ElementoService) {}

  elementoInfo = computed(() => {
    const elemento = this.elementoService.obterElementoSelecionado();
    return elemento
      ? `Nome: ${elemento.nome} (${elemento.simbolo}), Número Atômico: ${elemento.numeroAtomico}`
      : 'Nenhum elemento selecionado';
  });
}
