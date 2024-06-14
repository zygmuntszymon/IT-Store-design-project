const addToCart = (product) => {
  let cart = getCart();
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  console.log('Dodano produkt do koszyka:', product);
};

const getCart = () => {
  let cart = localStorage.getItem('cart');
  return cart ? JSON.parse(cart) : [];
};

const calculateCartTotal = () => {
  let cart = getCart();
  let total = cart.reduce((accumulator, product) => {
      return accumulator + product.price; 
  }, 0); 
  
  return total;
};

export { addToCart, getCart, calculateCartTotal };
