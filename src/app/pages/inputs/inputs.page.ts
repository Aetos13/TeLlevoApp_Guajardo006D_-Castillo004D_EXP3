import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.page.html',
  styleUrls: ['./inputs.page.scss'],
})
export class InputsPage implements OnInit {


  driver={
    destino:'',
    comuna:'',
    capacidad:'',
    cuota:'',
    hora:'',
  }

  constructor(private menuController: MenuController,
              private router: Router) { }



  go(){
    this.router.navigate(['card'])
  }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  onSubmit(){
    console.log('submit');
    console.log(this.driver);
  }


}
