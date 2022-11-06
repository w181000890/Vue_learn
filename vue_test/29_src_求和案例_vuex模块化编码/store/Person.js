import { nanoid } from 'nanoid'
import axios from 'axios'


const personOptions = {
  namespaced: true,
  actions: {
    addPersonWang(context, value) {
      console.log(value)
      if (value.name.indexOf('王') === 0) {
        context.commit('ADDNMAE', value)
      }
    },
    addPersonServe(context) {
      axios.get('https://api.uixsj.cn/hitokoto/get?type=social').then(
        message => {
          console.log(message)
          context.commit('ADDNMAE', { id: nanoid(), name: message.data })
        },
        error => {
          alert(error.message)
        }
      )
    },
  },




  mutations: {
    ADDNMAE(state, value) {
      state.personList.unshift(value)
    }
  },
  state: {
    personList: [
      { id: "1", name: '张三' }
    ]
  },
  getters: {
    getFirstName(state) {
      return state.personList[0].name
    }
  }

}
export default personOptions
