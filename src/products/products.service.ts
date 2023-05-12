import { Injectable, NotFoundException } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Product } from './product.model';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}
  async insertProduct(title: string, desc: string, price: number) {
    const newProduct = new this.productModel({
      title,
      desccription: desc,
      price,
    });
    await newProduct.save();
    return 'productId';
  }

  // getProducts() {
  //   // return [...this.products];
  // }

  // getProduct(productId: string) {
  //   const product = this.findProduct(productId)[0];
  //   return product;
  // }
  // updateProduct(
  //   productId: string,
  //   title: string,
  //   description: string,
  //   price: number,
  // ) {
  //   const [product, index] = this.findProduct(productId);
  //   const updatedProduct = { ...product };
  //   if (title) {
  //     updatedProduct.title = title;
  //   }
  //   if (description) {
  //     updatedProduct.description = description;
  //   }
  //   if (price) {
  //     updatedProduct.price = price;
  //   }
  //   this.products[index] = updatedProduct;
  // }

  // deleteProduct(productId: string) {
  //   const productIndex = this.findProduct(productId)[1];
  //   this.products.splice(productIndex, 1);
  // }

  // private findProduct(id: string): [Product, number] {
  //   const productIndex = this.products.findIndex((prod) => prod.id === id);
  //   const product = this.products[productIndex];
  //   if (!product) {
  //     throw new NotFoundException('Product not found');
  //   }
  //   return [product, productIndex];
  // }
}
