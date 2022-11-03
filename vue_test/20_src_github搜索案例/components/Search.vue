<template>
   <section class="jumbotron">
      <h3 class="jumbotron-heading">Search Github Users</h3>
      <div>
        <input type="text" placeholder="enter the name you search" v-model='keyword' />&nbsp;<button @click='getUserInfo'>Search</button>
      </div>
    </section>
</template>

<script>
import axios from 'axios'
export default {
  name:'Search',
  data() {
    return {
      keyword:''
    }
  },
  methods:{
    getUserInfo(){
      console.log('啊啊啊啊')
      this.$bus.$emit('getuser',{isFirst:false,waitMessage:true,mess:[]})
      // axios({
      //   method:'get',
      //   url:`https://api.github.com/search/users?q=${this.keyword}`,
      //   // params:{q:this.keyword}
      // })
      // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
      axios({ 
     method: 'GET', 
     url: `https://api.github.com/search/users?qq=${this.keyWord}`, 
     
     
 }).then(res=>{
        // console.log('哈哈哈哈')
        console.log(res.data.items)
        this.$bus.$emit('getuser',{isFirst:false,waitMessage:false,mess:res.data.items})
      },
      error=>{
        this.$bus.$emit('getuser',{isFirst:false,waitMessage:false,errorMessage:error.message})
      })
      // axios.get(`https://api.github.com/search/users?q=${this.keyWord}`).then(
			// 		response => {
			// 			console.log('请求成功了')
			// 			//请求成功后更新List的数据
			// 			this.$bus.$emit('updateListData',{isLoading:false,errMsg:'',users:response.data.items})
			// 		},
			// 		error => {
			// 			//请求后更新List的数据
			// 			this.$bus.$emit('updateListData',{isLoading:false,errMsg:error.message,users:[]})
			// 		}
			// 	)
    }
  }

}
</script>

<style>

</style>