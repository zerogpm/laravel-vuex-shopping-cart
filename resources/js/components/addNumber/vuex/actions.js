export const fetchNumber = ({ commit }, {min , max}) => {
    axios.get(`http://192.168.2.73:8080/number?min=${min}&max=${max}`).then((response) => {
        commit('addRandomNumber', response.data.number)
    })
};
