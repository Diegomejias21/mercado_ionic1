import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {


  constructor(private router:Router, private alertController: AlertController) { }

  ngOnInit() {
  }

  irPagina(){
    this.router.navigate(['/principal']);
  }

  irproducto1(){
    this.router.navigate(['/producto1']);
  }

  irproducto2(){
    this.router.navigate(['/producto2']);
  }

  irproducto3(){
    this.router.navigate(['/producto3']);
  }

  irproducto4(){
    this.router.navigate(['/producto4']);
  }

  irproducto5(){
    this.router.navigate(['/productoo']);
  }

  irproducto6(){
    this.router.navigate(['/producto6']);
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
