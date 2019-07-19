import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {
  //@Input() resultado: any;
  @Output() resultado = new EventEmitter<string>();
  entradaTexto='';

  ngOnInit(): void {
  }
  
  buscar(){
    this.resultado.emit(this.entradaTexto);
  }

}
