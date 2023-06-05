import { State } from "./state";
import { Category } from "./category";
export interface Product{
id: number;
name: string;
color: string;
material: string;
gender: string;
states: State[];
category: Category;
}