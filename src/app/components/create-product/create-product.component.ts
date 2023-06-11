import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/ProductService';
import { Product } from 'src/app/models/product';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { Category } from 'src/app/models/category';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  productForm!: FormGroup;
  product!: Product;
  categories:Category[]


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
  // get states(): FormArray {
  //   return this.productForm.get('states') as FormArray;
  // }

  // addState() {
  //   const stateFormGroup = this.formBuilder.group({
  //     size: '',
  //     price: '',
  //     percent: ''
  //   });
  
  //   this.states.push(stateFormGroup);
  // }
  ngOnInit(){
      this.productForm = this.formBuilder.group({
        name: [''],
        color: [''],
        price:[],
        sastav: [''],
        spol: [''],
        category: [{}],
        photo:[''],
        state:[[]]
      })
      this.productService.getCategories().subscribe(data=>{
        console.log(data)
        this.categories=data
      })

  }
  submit(){
    let newproduct=this.productForm.value;
    this.productService.getCategoryById(this.productForm.value.category).subscribe(data=>{
      console.log(data);
      newproduct.category=data;
    })
    console.log(newproduct)
    this.productService.addProduct(newproduct).subscribe(value=>
      console.log(value));
  }

}
