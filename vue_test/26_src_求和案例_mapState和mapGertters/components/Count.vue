<template>
  <div id='root'>
    <h1>当前求和为{{sum}}</h1>
    <h1>当前求和扩大10倍为{{bigSum}}</h1>
    <h2>我在{{school}}学习，学科是{{subject}}</h2>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click='add'>+</button>
    <button @click='sub'>-</button>
    <button @click='addOdd'>当前和为奇数再加</button>
    <button @click='addWait'>等一等再加</button>
    
  </div>
</template>
<script> 
import {mapState,mapGetters} from 'vuex'
export default {
  name:'Count',
  data() {
    return {
      n:1
    }
  },
  methods:{
    add(){
      this.$store.commit('JIA',this.n)
    },
    sub(){
      console.log(this)
        this.$store.commit('JIAN',this.n)
    },
    addOdd(){
      this.$store.dispatch('jiaOdd',this.n)
    },
    addWait(){
     this.$store.dispatch('jiaWait',this.n)
    }
  },
  computed:{
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // }
    ...mapState({sum:'sum',school:'school',subject:'subject'}),
    ...mapGetters(['bigSum'])
  }

}
</Script>
  

<style>
 button{
  margin-left:5px
 }
</style>