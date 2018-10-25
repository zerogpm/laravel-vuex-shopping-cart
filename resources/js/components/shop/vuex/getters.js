export const products = (state) => state.products;

// cart
export const cart = (state) => state.cart;

// cart item count
export const cartCount = (state) => state.cart.length;

// cart total
export const cartTotalPrice = (state) => {
    return state.cart.reduce((sum, number) => {
      return sum + number.product.price * number.quantity
    }, 0).toFixed(2)
}

