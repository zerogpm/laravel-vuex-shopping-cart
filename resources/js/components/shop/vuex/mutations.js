export const setProducts = (state, products) => {
    state.products = products;
    state.oldProductsOrder = products.slice()
    state.titleOrder = products.slice()
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
};

export const sortByPrice = (state, checked) => {

    if (checked) {
        state.products = state.products.sort((a, b) => {
            return a.price - b.price
        })
    } else {
        state.products = state.oldProductsOrder.slice()
    }

};

export const sortByTitle = (state, checked) => {

    if (checked) {
        state.products = state.products.sort((a, b) => {
            if (a.title.toUpperCase() < b.title.toUpperCase())
            {
                return -1
            }
            if (a.title.toUpperCase() > b.title.toUpperCase()) {
                return 1
            }
            return 0
        })
    } else {
        state.products = state.titleOrder.slice()
    }

}
