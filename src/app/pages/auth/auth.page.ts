import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {supabase} from 'src/app/suprabase.client'
import {Route, Router} from '@angular/router'
@Component({
  selector: 'app-auth',
  templateUrl: './auth.page.html',
  styleUrls: ['./auth.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class AuthPage{
  email='';
  password=''
  error=''
  constructor(private router: Router) { }
  async login(){
    const {error}=await supabase.auth.signInWithPassword({
      email: this.email,
      password: this.password
    });

    if (error){
      this.error=error.message
    } else{
      this.router.navigate(['/home'])
    }
  }
  async register(){
    const {error}=await supabase.auth.signUp({
      email: this.email,
      password: this.password
    });
    if (error){
      this.error=error.message
    } else{
      alert('Registro exitoso, verifica tu correo electrónico')
    }
  }
  ngOnInit() {
  }

}