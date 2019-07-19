import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'appPrueba';
  textoEntrada = '';
  resultado = {};
  private urlapi = '/api/?q=';

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    
  }
  
  ngOnChange(){
    

  }
  private getRecetas(q) {
    const url = this.urlapi + q;
    this.httpClient
      .get(url)
      .subscribe(apiData => (this.resultado = apiData));
  }

  procesaPropagar(mensaje) {
    this.getRecetas(mensaje);
  }
}
