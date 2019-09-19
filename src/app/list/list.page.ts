import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from '../services/products.service';
import {Location} from '@angular/common';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
   listProducts: any = [];
   listOrders = [];
   total:number;
   filterList = [];
   contador : number;
 
  constructor(public alertController: AlertController, private router: Router, private servProducts: ProductsService, private _location: Location) {
  this.contador= 0;
  }
  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Mr User!',
      message: 'Do you want to take the order?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Okay',
          handler: () => {
            this.router.navigateByUrl('/home');
            console.log('Confirm Okay');
          }
        }
      ]
    });

    await alert.present();
  }

  ngOnInit() {
    this.get_Products();
  }
  // add back when alpha.4 is out
   navigate(listOrders) {
    this.router.navigate(['/list', JSON.stringify(listOrders)]);
  }
  get_Products(){
    this.servProducts.getProducts().subscribe((data: {}) => {
     console.log(data, 'list products');
     this.listProducts = data;
    })
  }
  backClicked() { 
    this._location.back(); 
   } 
   sumar(){
     let i = this.contador++;
     console.log(i);
   }
   restar(){
    let i = this.contador--;
    if(i < 0) {
      clearInterval(i);
    }
    console.log(i);
  }
  next(){
    this.presentAlertConfirm();
}
}