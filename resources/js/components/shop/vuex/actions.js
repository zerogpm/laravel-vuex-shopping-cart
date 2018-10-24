export const getProducts = ({commit}) => {
     return axios.get('http://192.168.2.73:8080/products').then((response) => {
        commit('setProducts', response.data);
        return Promise.resolve()
    })
}


// Get cart
export const getCart = ({commit}) => {
  return axios.get('http://192.168.2.73:8080/api/cart').then((response) => {
      commit('setCarts', response.data);
      return Promise.resolve()
  })
};

export const addProductToCart = ({commit}, { id }) => {
  return axios.post('http://192.168.2.73:8080/api/cart', {
    product_id : id
  }).then((response) => {
      console.log(response);
  }).catch((error) => {
      console.log(error)
  })
};

// remove a product from our cart

// remove all prodcuts from our cart
