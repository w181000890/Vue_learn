<template>
  <div class="todo-footer" v-show="allNum" @change='selectAll'>
    <label>
      <input type="checkbox" :checked="isall" />
    </label>
    <span>
      <span>已完成{{ doneNum }}</span> / 全部{{ allNum }}
    </span>
    <button class="btn btn-danger" @click='clearnAll'>清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "MyFooter",
  props: ["todoList", "btnAll",'clearnAll'],
  computed: {
    doneNum() {
      //常规forEach方法
      // let i = 0
      // this.todoList.forEach(element => {
      //   if(element.todo){
      //     i++
      //   }
      //   console.log(i)

      // });
      // return i
      //方法2 reduce方法
      return this.todoList.reduce((a, b) => {
        return a + (b.todo ? 1 : 0);
      }, 0);
    },
    allNum() {
      return this.todoList.length;
    },
    isall() {
      return this.doneNum===this.allNum && this.doneNum>0
    },
  },
  methods: {
    selectAll(e) {
      // console.log(e.target)
      this.btnAll(e.target.checked);
    },
    clearBtn(){
      this.clearnAll()
    }
  },
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