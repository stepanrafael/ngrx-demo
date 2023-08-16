export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  address: Address;
  email: string;
}

export interface Article {
  userId: number;
  id: number;
  title: string;
  body: string;
}
