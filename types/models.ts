// types/models.ts
export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
}

export interface Category {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  discountPrice?: number;
  imageUrl: string;
  categoryId: string;
  inStock: boolean;
  unit: string; // e.g., kg, gm, piece
  quantity: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  totalAmount: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: Date;
  updatedAt: Date;
  address: Address;
  paymentMethod: string;
}

export interface Address {
  id: string;
  userId: string;
  name: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  isDefault: boolean;
}

export interface Deal {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  discount: number;
  validUntil: Date;
  products: Product[];
}