import {Product} from "./product";
import { ResponseModel } from "./responsemodel";
export interface ProductResponseModel extends ResponseModel{
    data:Product[]   
}