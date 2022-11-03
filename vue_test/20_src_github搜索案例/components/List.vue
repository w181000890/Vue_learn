<template>
   <div class="row">
      <div class="card" v-for='user in users' :key='user.login'>
        <a :href="user.html_url" target="_blank">
          <img :src="user.avatar_url" style='width: 100px'/>
        </a>
        <p class="card-text">{{user.login}}</p>
      </div>
      <h1 v-show='isFirst'>欢迎登录</h1>
      <h2 v-show="waitMessage">正在加载。。。。。</h2>
      <h2>{{errorMessage}}</h2>
      
    </div>
</template>

<script>
export default {
  name:'List',
  data() {
    return {
      users:[],
      isFirst:true,
      waitMessage:false,
      errorMessage:''

    }
  },
  mounted() {
    this.$bus.$on('getuser',(data)=>{
        this.users = data.mess,
        this.isFirst = data.isFirst,
        this.waitMessage = data.waitMessage
        this.errorMessage = data.errorMessage

    })
  },
}
</script>

<style>

</style>