import Vue from 'vue'
import Vuex from 'vuex'
import personOptions from './Person'
import countOptions from  './Count'




Vue.use(Vuex)

const vuex = new Vuex.Store({
 modules:{
    countAbout: countOptions,
    personAbout: personOptions
 }
})
export default vuex 