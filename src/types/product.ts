type productType = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  stock: number;
};

type BasketProduct = { productDetails: productType; amount: number }[];

export type {productType,BasketProduct};


