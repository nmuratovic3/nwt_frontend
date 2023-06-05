import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/productService';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  gender: string[]=['male', 'female', 'kids']
  product!: Product;

  constructor (private productService: ProductService, private formBuilder: FormBuilder){}

  onSubmit(){
    const product: Product = this.productForm.value;
    this.productService.addProduct(product).subscribe(
      (response) =>{
      console.log("Proizvod je dodan");
      },
      (error)=>{
        console.error("Doslo je do greske", error)
      }
    )
  }
  ngOnInit(){
      this.productForm = this.formBuilder.group({
        name: '',
        color: '',
        material: '',
        state: []
      })

  }

}
