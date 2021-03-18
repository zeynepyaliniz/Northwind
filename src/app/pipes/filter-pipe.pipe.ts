import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value:Product[], filterText:string): Product[] {
    filterText = filterText? filterText.toLocaleUpperCase():""
    let lenFilterText=2
    return filterText.length>lenFilterText? value.filter(
      (p:Product)=>p.productName.toLocaleUpperCase().indexOf(filterText)!==-1):value;
  }

}
