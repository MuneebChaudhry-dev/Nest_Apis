import * as mongoose from 'mongoose';

export const ProducSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
});

export interface Product {
  title: string;
  id: string;
  description: string;
  price: number;
}
