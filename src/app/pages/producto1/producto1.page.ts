import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-producto1',
  templateUrl: './producto1.page.html',
  styleUrls: ['./producto1.page.scss'],
})
export class Producto1Page implements OnInit {
  alertController: any;

  constructor(private router:Router) { }

  ngOnInit() {
  }
  
  async mostrarAlerta() {
    const alert = await this.alertController.create({
      header: '¡Éxito!',
      message: 'Fue enviado con éxito su producto al carrito de compra',
      buttons: ['OK']
    });

    await alert.present();
  }
}
