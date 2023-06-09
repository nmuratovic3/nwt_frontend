import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
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
  get states(): FormArray {
    return this.productForm.get('states') as FormArray;
  }

  addState() {
    const stateFormGroup = this.formBuilder.group({
      size: '',
      price: '',
      percent: ''
    });
  
    this.states.push(stateFormGroup);
  }
  ngOnInit(){
      this.productForm = this.formBuilder.group({
        name: '',
        color: '',
        material: '',
        gender: [''],
        states: this.formBuilder.array([]),
        category: []
      })

  }

}
