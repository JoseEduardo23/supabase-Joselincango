import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import {Route, Router} from '@angular/router'
import {supabase} from 'src/app/suprabase.client'
@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, IonicModule]
})
export class HomePage implements OnInit {
  email=''
  constructor(private router: Router) { }

  async ngOnInit() {
    const {data, error}=await supabase.auth.getUser();
    if (error || !data.user){
      this.router.navigate(['/auth'])
    } else {
      this.email=data.user.email || '';
    }
  }

  async logOut(){
    await supabase.auth.signOut();
    this.router.navigate(['/auth'])
  }
}