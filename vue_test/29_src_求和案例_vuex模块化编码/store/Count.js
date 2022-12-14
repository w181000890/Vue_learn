

const countOptions = {
  namespaced: true,
  actions: {
    jiaOdd(context, value) {
      console.log(context)
      if (context.state.sum % 2 != 0) {
        context.commit('JIA', value)
      }

    },
    jiaWait(context, value) {
      setTimeout(() => {
        context.commit('JIA', value)
      }, 1000);

    },

  },
  mutations: {
    JIA(state, value) {
      state.sum += value
    },
    JIAN(state, value) {
      state.sum -= value
    },


  },
  state: {
    sum: 0,
    school: '尚硅谷',
    subject: '前端',
  },
  getters: {
    bigSum(state) {
      return state.sum * 10
    }
  }

}

export default countOptions