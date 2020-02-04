import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
		currentRootComponentIndex:0
    },
    mutations: {
        exchangeRootComponent(state, componentIndex) {
            state.currentRootComponentIndex = componentIndex;
        }
    }
})

export default store
