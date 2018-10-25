export const getProducts = ({commit}) => {
     return axios.get('http://192.168.2.73:8080/products').then((response) => {
        commit('setProducts', response.data);
        return Promise.resolve()
    })
}


export const getCart = ({commit}) => {
  return axios.get('http://192.168.2.73:8080/api/cart').then((response) => {
      commit('setCarts', response.data);
      return Promise.resolve()
  })
};

export const addProductToCart = ({commit}, payload) => {
  return axios.post('http://192.168.2.73:8080/api/cart', {
    product_id : payload.id
  }).then((response) => {
      commit('appendCart', response.data);
  }).catch((error) => {
      console.log(error)
  })
};

// remove a product from our cart
export const removeProductFromCart = ({ commit }, payload) => {
  return axios.delete(`http://192.168.2.73:8080/api/cart/${payload.id}`).then((response) => {
     commit('removeFromCart', payload.id)
  }).catch((error) => {
      console.log(error)
  })
};

// remove all prodcuts from our cart
