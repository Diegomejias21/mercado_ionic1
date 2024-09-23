import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormGroup,FormControl,Validators,FormBuilder } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;


  admin:any = {
    usuario:'admin@gmail.com',
    password:'12341234'

  }
  
  arregloPersona: any = {
    nombre:'Jose',
    apellido: 'Rodriguez',
    edad:25
  }

  constructor(private router:Router, public fb: FormBuilder, public alertController: AlertController, public navCtrl: NavController ) { 
    
    this.formularioLogin = this.fb.group({
      'Nombre': new FormControl("",Validators.required),
      'Email': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })
  }

  ngOnInit() {
  }

  irRegistro(){
    this.router.navigate(['/registrar']);
  }
  
  irPagina(){
    this.router.navigate(['/principal']);
  }
}

