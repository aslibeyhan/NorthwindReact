import axios from "axios";

export default class ProductService{
    getProducts(){
        return axios.get("http://localhost:8082/api/products/getall")
    }

    getByProducts(id){
        return axios.get("http://localhost:8082/api/products/"+id);
       }
}