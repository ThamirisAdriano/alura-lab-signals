import { Component } from '@angular/core';
import { ElementoService, Elemento } from '../elemento.service';

@Component({
  selector: 'app-optimized',
  templateUrl: './optimized.component.html',
  styleUrls: ['./optimized.component.css']
})
export class OptimizedComponent {
  constructor(public elementoService: ElementoService) {}


  selecionarElemento(elemento: Elemento) {
    this.elementoService.selecionarElemento(elemento);
  }
 
}
