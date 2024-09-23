import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-producto2',
  templateUrl: './producto2.page.html',
  styleUrls: ['./producto2.page.scss'],
})
export class Producto2Page implements OnInit {
  alertController: any;

  constructor() { }

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
