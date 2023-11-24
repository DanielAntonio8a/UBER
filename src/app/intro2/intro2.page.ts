import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-intro2',
  templateUrl: './intro2.page.html',
  styleUrls: ['./intro2.page.scss'],
})
export class Intro2Page implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{ // esto sirve para un tipo de delay
  this.router.navigateByUrl('/signin') //con esto se hace la navegacion de paginas

    },7000);
  }

}
