<template>
  <div>
    <h1>人员列表</h1>
    <h3 style='color:red'>Count求和为{{sum}}</h3>
    <input type="text" placeholder="请输入姓名" v-model='name' @keyup.enter='addName'>
    <button @click='addName'>添加</button>
    <ul>
      <li v-for="p in personList" :key="p.id">{{p.name}}</li>
    </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
import { computed } from 'vue';
export default {
  name:'Person',
  data() {
    return {
      name:''
    }
  }, 
  computed:{
  personList(){
    return this.$store.state.personList
  },
  sum(){
    return this.$store.state.sum
  }
},
methods: {
  addName(){
    if(!this.name.trim()) return alert('姓名不能为空')
    this.$store.commit('ADDNMAE',{id:nanoid(),name:this.name})
    this.name=''
  }
},
};

</script>

<style>
</style>