import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  conteudo = 'dsa';

  constructor(
    public helloService:HelloService
  ) {}
  //   constructor(
  // ) {}

  ngOnInit(): void {
    this.helloService.buscar().subscribe(this.setConteudo)
  }

  private setConteudo = (retorno : any) => {
    this.conteudo = retorno;
  }
  

}
