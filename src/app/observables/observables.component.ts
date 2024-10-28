import { Component, computed } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';

interface Elemento{
  nome: string;
  simbolo: string;
  numeroAtomico: number;
}

@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent {

private elementoSelecionadoSubject = new BehaviorSubject<Elemento | null>(null);
 elementoSelecionado$ = this.elementoSelecionadoSubject.asObservable();

  elementos: Elemento[] = [
    { nome: 'Hidrogênio', simbolo: 'H', numeroAtomico: 1 },
    { nome: 'Oxigênio', simbolo: 'O', numeroAtomico: 8 },
    { nome: 'Sódio', simbolo: 'Na', numeroAtomico: 11 },
    { nome: 'Cloro', simbolo: 'Cl', numeroAtomico: 17 }
  ];

  selecionarElemento(elemento: Elemento) {
    this.elementoSelecionadoSubject.next(elemento);
  }

  elementoInfo$: Observable<string> = this.elementoSelecionado$.pipe(
    map(elemento => 
      elemento
        ? `Nome: ${elemento.nome} (${elemento.simbolo}), Número Atômico: ${elemento.numeroAtomico}`
        : 'Nenhum elemento selecionado'
    )
  );

}
