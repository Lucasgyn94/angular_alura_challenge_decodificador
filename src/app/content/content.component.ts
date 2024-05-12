import { Component } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css', './content.responsive.component.css']
})
export class ContentComponent {

  textoOriginal: string = '';
  textoCriptografado: string = '';
  textoDescriptografado: string = '';
  mostrarResultado: boolean = false;

  constructor() { }

  criptografar() {
    this.textoCriptografado = this.textoOriginal
      .replace(/e/g, 'enter')
      .replace(/i/g, 'imes')
      .replace(/a/g, 'ai')
      .replace(/o/g, 'ober')
      .replace(/u/g, 'ufat');
    this.textoDescriptografado = '';
    this.mostrarResultado = true;
  }

  descriptografar() {
    // Implemente a função de descriptografia conforme necessário
    this.textoOriginal = this.textoCriptografado
     .replace(/enter/g, 'e')
     .replace(/imes/g, 'i')
     .replace(/ai/g, 'a')
     .replace(/ober/g, 'o')
     .replace(/ufat/g, 'u');

    this.textoCriptografado = '';
    this.mostrarResultado = true;
  }

  copiarTexto() {
    // Implemente a função de cópia conforme necessário
  }

}
