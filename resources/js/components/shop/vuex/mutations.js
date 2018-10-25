export const setProducts = (state, products) => {
    state.products = products
}

// set cart
export const setCarts = (state, cart) => {
    state.cart = cart
};

// clear cart

// remove from cart
export const removeFromCart = (state, id) => {
    const existing = state.cart.find((item) => {
      return item.product.id === id
    });

    if (existing) {
      existing.quantity--
    } else {

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
