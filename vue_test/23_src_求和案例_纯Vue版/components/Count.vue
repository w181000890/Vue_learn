<template>
  <div id='root'>
    <h1>当前求和为{{sum}}</h1>
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
// https://s3.ax1x.com/2021/01/16/srJlq0.jpg
// http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4 
<script>
export default {
  name:'Count',
  data() {
    return {
      sum:0,
      n:1
    }
  },
  methods:{
    add(){
      this.sum += this.n
    },
    sub(){
        this.sum -= this.n
    },
    addOdd(){
      if(this.sum%2 !=0){
        this.sum += this.n
      }
    },
    addWait(){
      setTimeout(()=>{
          this.sum += this.n
      },1000)
    }
  }
}
</Script>
  

<style>
 button{
  margin-left:5px
 }
</style>