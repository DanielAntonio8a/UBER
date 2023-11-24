import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-carga',
  templateUrl: './carga.page.html',
  styleUrls: ['./carga.page.scss'],
})
export class CargaPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{ // esto sirve para un tipo de delay
  this.router.navigateByUrl('/inicio') //con esto se hace la navegacion de paginas

    },1000);
  }

}
