import Vue from 'vue'
import Vuex from 'vuex'
import shop from '../components/shop/vuex'
import addNumber from '../components/addNumber/vuex/index'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        shop,
        addNumber
    }
})
