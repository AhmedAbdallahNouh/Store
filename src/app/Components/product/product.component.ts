import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  products=new Array();
  SearchProducts=new Array();
  ProductsByCategory=new Array();
  searchVlue:string="";
  chips:[string]=["ALL"];
  chip:string ="";
  constructor() {
    this.products=[
      {Name:'Snack BOX',Image:"assets/Images/T-shirts/t-shirt1.jpg",Category:"T-shirst", Price:"20$" ,Counter:1 },
      {Name:'Snack BOX',Image:"assets/Images/T-shirts/t-shirt2.jpg",Category:"T-shirst", Price:"20$" ,Counter:1 },
      {Name:'Snack BOX',Image:"assets/Images/T-shirts/t-shirt3.jpeg",Category:"T-shirst", Price:"20$" ,Counter:1 },       
      {Name:'Snack BOX',Image:"assets/Images/T-shirts/t-shirt3.jpeg",Category:"T-shirst", Price:"20$" ,Counter:1 },       
      {Name:'adidas Mens Training',Descreption:"Weather Jacket 22/23 Purple",Image:"assets/Images/Jackets/jacket1.jpg",Category:"Jackets", Price:"20$" ,Counter:1 },
      {Name:'adidas Mens Training',Descreption:"Weather Jacket 22/23 Purple",Image:"assets/Images/Jackets/jacket2.jpg",Category:"Jackets", Price:"20$" ,Counter:1 },
      {Name:'adidas Mens Training',Descreption:"Weather Jacket 22/23 Purple",Image:"assets/Images/Jackets/jacket3.jpg",Category:"Jackets", Price:"20$" ,Counter:1 },
      {Name:'adidas Mens Training',Descreption:"Weather Jacket 22/23 Purple",Image:"assets/Images/Jackets/jacket4.jpg",Category:"Jackets", Price:"20$" ,Counter:1 },
      {Name:'Cap',Image:"assets/Images/Accessories/acces1.jpg",Category:"Accessories", Price:"20$" ,Counter:1 },
      {Name:'Bag',Image:"assets/Images/Accessories/acces2.jpg",Category:"Accessories", Price:"20$" ,Counter:1 },
      {Name:'Watch',Image:"assets/Images/Accessories/acces3.jpg",Category:"Accessories", Price:"20$" ,Counter:1 },
      {Name:'Ball',Image:"assets/Images/Accessories/acces4.jpg",Category:"Accessories", Price:"20$" ,Counter:1 },
      {Name:'Ball',Image:"assets/Images/Accessories/acces4.jpg",Category:"Accessories", Price:"20$" ,Counter:1 },
    ];
    this.SearchProducts = this.products;
    
    this.products.forEach(product => { 
      if(!this.chips.includes(product.Category)) this.chips.push(product.Category);      
    });
    console.log(this.products);
    
  }
  applyFilter(event:any){
    this.searchVlue =  (event.target as HTMLInputElement).value;
    if(this.chip == "" || this.chip == "ALL" ) this.SearchProducts = this.products.filter((product:any) => product.Name.toLowerCase().startsWith(this.searchVlue.toLowerCase())) ;
    else this.SearchProducts = this.products.filter((product:any) => product.Category== this.chip && product.Name.toLowerCase().startsWith(this.searchVlue.toLowerCase())) ;
  }
  applyCategory(chip:any){ 
    this.chip = chip
    console.log("parameter"+this.chip);
    console.log("attribute"+this.chip);
    
    if(chip == "ALL") this.SearchProducts = this.products;
    else this.SearchProducts = this.products.filter((product:any) => product.Category == chip );

    console.log(this.SearchProducts);
    // if(this.ProductsByCategory[0] == null) console.log("its null");
    // else console.log("not null");
  }
}
