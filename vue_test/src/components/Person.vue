<template>
  <div>
    <h1>人员列表</h1>
    <h2>第一个人的姓名是:{{firname}}</h2>
    <h3 style='color:red'>Count求和为{{sum}}</h3>
    <input type="text" placeholder="请输入姓名" v-model='name' @keyup.enter='addName'>
    <button @click='addName'>添加</button>
    <button @click='addNameWang'>添加姓王的</button>
    <button @click='addPersonServe'>服务器添加</button>
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
    console.log(this)
    return this.$store.state.personAbout.personList
  },
  sum(){
    return this.$store.state.countAbout.sum
  },
  firname(){
    return this.$store.getters['personAbout/getFirstName']
  }
},
methods: {
  addName(){
    if(!this.name.trim()) return alert('姓名不能为空')
    this.$store.commit('personAbout/ADDNMAE',{id:nanoid(),name:this.name})
    this.name=''
  },
  addNameWang(){
    if(!this.name.trim()) return alert('姓名不能为空')
    this.$store.dispatch('personAbout/addPersonWang',{id:nanoid(),name:this.name})
    this.name=''
  },
  addPersonServe(){
    this.$store.dispatch('personAbout/addPersonServe')
  }
},
};

</script>

<style>
</style>