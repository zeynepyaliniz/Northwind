import { Component, OnInit } from '@angular/core';

@Component({  
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category1: any = {  
    categoryName: 'Electronic',
    categoryId: 1,
    description:'Electronic Device'
  };
  category2: any = {
    categoryName: 'Home',
    categoryId: 2,    
    description:'Home and Living'
  };
  categories = [this.category1,this.category2];
  constructor() { }

  ngOnInit(): void {
  }

}
