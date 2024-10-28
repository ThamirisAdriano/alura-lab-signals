import { Component } from '@angular/core';
import { ElementoService } from './../elemento.service';


@Component({
 selector: 'app-effects-demo',
 templateUrl: './effects-demo.component.html',
 styleUrls: ['./effects-demo.component.css']
})
export class EffectsDemoComponent {


 constructor(public elementoService: ElementoService) {}


 selecionarElemento(elemento: any) {
   this.elementoService.selecionarElemento(elemento);
 }

 limparLog() {
  this.elementoService.limparLog();
}

}

 

