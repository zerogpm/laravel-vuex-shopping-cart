export const setProducts = (state, products) => {
    state.products = products
}

// set cart
export const setCarts = (state, cart) => {
    state.cart = cart
};

// clear cart
export const removeAllProductsFromCart = (state) => {
    state.cart = [];
};

// remove from cart
export const removeFromCart = (state, id) => {
    const existing = state.cart.find((item) => {
      return item.product.id === id
    });

    if (existing.quantity > 1) {
      existing.quantity--
    } else {
      state.cart = state.cart.filter((item) => {
          return item.product.id !== id;
      })
    }
};

// append to cart
export const appendCart = (state, cart) => {

    const existing = state.cart.find((item) => {
      return item.product.id === cart.product.id
    });

    if (existing) {
      existing.quantity++
    } else {
      state.cart.push(cart)
    }
}
