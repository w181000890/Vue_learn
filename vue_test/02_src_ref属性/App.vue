<template>
  <div>
    <h1 v-text='msg' ref='title'></h1>
    <button @click='showDom'>点我输出标签信息</button>
    <School ref='sch' />
  
  </div>
</template>

<script>
import School from './components/School'
export default {
  name:"App",
  data() {
    return {
      msg:"欢迎学习vue"
    }
  },
  components:{
    School,
  },
  methods:{
    showDom(){
      console.log(this.$refs.title)
      console.log(this.$refs.sch)
    }
  }
}
</script>

