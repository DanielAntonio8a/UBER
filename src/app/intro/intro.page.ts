import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(()=>{ // esto sirve para un tipo de delay
  this.router.navigateByUrl('/intro2') //con esto se hace la navegacion de paginas

    },5500);
  }

}
