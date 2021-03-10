import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productresponsemodel';
import {HttpClient} from "@angular/common/http"; //backende istekte bulunmak için
import { ProductToDo } from 'src/app/models/productToDo';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  
  products:Product[] = [];
  productToDo : ProductToDo[] = [];
  apiURL:string = "https://localhost:44314/api/products/getall";
  // productResponseModel:ProductResponseModel={
  //   data : this.products,
  //   message : "",
  //   success : true
  // };
  constructor(private httpClient:HttpClient) {}

  ngOnInit(): void {
    console.log("init works!!");
  }
  getProducts(){
    this.httpClient
    .get<ProductResponseModel>(this.apiURL)
    .subscribe((response)=>{
      this.products = response.data
    });
    //this.httpClient.get<ProductResponseModel>(this.apiURL);
  }
}
