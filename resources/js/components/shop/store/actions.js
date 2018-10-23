export const getProducts = ({commit}) => {
     axios.get('http://192.168.2.73:8080/products').then((response) => {
        commit('setProducts', response.data);
    })
}
