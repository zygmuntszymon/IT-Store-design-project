const addToCart = (product) => {
    let cart = localStorage.getItem('cart');
    if (!cart) {
      cart = [];
    } else {
      cart = JSON.parse(cart);
    }
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log('Dodano produkt do koszyka:', product);
  };
  
  const getCart = () => {
    let cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  };
  
  const removeFromCart = (index) => {
    let cart = getCart();
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  const clearCart = () => {
    localStorage.removeItem('cart');
  };
  
  export { addToCart, getCart, removeFromCart, clearCart };
  