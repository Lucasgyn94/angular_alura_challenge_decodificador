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
    this.textoDescriptografado = this.textoCriptografado
     .replace(/enter/g, 'e')
     .replace(/imes/g, 'i')
     .replace(/ai/g, 'a')
     .replace(/ober/g, 'o')
     .replace(/ufat/g, 'u');

    this.textoCriptografado = '';
    this.mostrarResultado = true;
  }


  copiarTexto() {
    let textoParaCopiar: string = '';

    if (this.textoCriptografado) {
      textoParaCopiar = this.textoCriptografado;
    } else if (this.textoDescriptografado) {
      textoParaCopiar = this.textoDescriptografado;
    }

    if (textoParaCopiar) {
      const areaTexto = document.createElement('textarea');
      areaTexto.value = textoParaCopiar;
      document.body.appendChild(areaTexto);
      areaTexto.select();
      document.execCommand('copy');
      document.body.removeChild(areaTexto);
      alert('Texto copiado com sucesso!');
      this.textoOriginal = '';
    }
  }


}
