import React, { useState } from 'react';

const Wishlist = () => {
  const [cart, setCart] = useState([]);
  const wishlistItems = [
    {
      id: 1,
      name: "Bose Sport Earbuds",
      price: 999,
      image: "https://example.com/image.png",
      originalPrice: 1299,
      stockStatus: "IN STOCK",
    },
    {
      id: 2,
      name: "Bose Sport Earbuds",
      price: 999,
      image: "https://example.com/image.png",
      originalPrice: 1299,
      stockStatus: "IN STOCK",
    },
  ];

  const addToCart = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} has been added to your cart!`);
  };

  return (
    <div className="container mx-auto mt-10 px-4 md:px-0">
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-6">Wishlist</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="border-b">
                <th className="py-2">PRODUCTS</th>
                <th className="py-2">PRICE</th>
                <th className="py-2">STOCK STATUS</th>
                <th className="py-2">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {wishlistItems.map(item => (
                <tr className="border-b" key={item.id}>
                  <td className="py-4 flex items-center">
                    <img alt={item.name} className="w-16 h-16 mr-4" src={item.image} width="60" />
                    {item.name}
                  </td>
                  <td className="py-4">
                    <span className="line-through">${item.originalPrice}</span> ${item.price}
                  </td>
                  <td className="py-4 text-green-500">{item.stockStatus}</td>
                  <td className="py-4">
                    <button
                      className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                      onClick={() => addToCart(item)}
                    >
                      ADD TO CART
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
