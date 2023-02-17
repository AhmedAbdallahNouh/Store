import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
 @Input() ProductsDB :any;
 constructor(){
  
 }
 ngOnInit(){
  console.log(this.ProductsDB);

 }
}
