const db = {
  products: [
    {
      id: 1,
      name: 'macbook',
      desc: 'good laptop',
      price: 500,
      stock: 2,
      availableStock: 1,
    },
  ],
  sales: [
    {
      id: 1,
      products: [
        {
          product: 'macbbook',
          quantity: 2,
          price: 100000,
        },
        {
          product: 'macbbook',
          quantity: 2,
          price: 100000,
        },
      ],
      totalPrice: 200000,
    },
    {
      id: 2,
      products: [
        {
          product: 'macbbook',
          quantity: 2,
          price: 100000,
        },
        {
          product: 'macbbook',
          quantity: 2,
          price: 100000,
        },
      ],
      totalPrice: 200000,
    },
  ],
  Users: [
    {
      username: 'oreoluwahelen',
      password: 'admin',
    },
  ],


};


export default db;
