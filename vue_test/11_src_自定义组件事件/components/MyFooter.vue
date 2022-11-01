<template>
  <div class="todo-footer" v-show='footshow'>
    <label>
      <input type="checkbox" @click='btnchange' :checked='isall' />
    </label>
    <span> <span>已完成{{checkedNum}}</span> / 全部{{allNum}} </span>
    <button class="btn btn-danger" @click = 'clearbtn'>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name:'MyFooter',
  props:['todos','allchoich','clearCompe'],
  computed:{
    checkedNum(){
      let i = 0
      this.todos.forEach(element => {
        if(element.todo){
          i++
        }
      });
      return i
    },
    allNum(){
      return this.todos.length
    },
    isall(){
      return this.checkedNum == this.allNum &&this.allNum>0
    },
    footshow(){
      return this.todos.length>0
    }
   
  },
  methods:{
     btnchange(e){
      // console.log('$$$$$$',e.target)
      // this.allchoich(e.target.checked)
      this.$emit('allchoich',e.target.checked)
    },
    clearbtn(){
      this.clearCompe()
    }
    
  }
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>