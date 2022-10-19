<template>
  <div class="todo-footer" v-show="totalnum">
    <label>
      <input type="checkbox" :checked="isall" @click="choice"/>
    </label>
    <span>
      <span>已完成{{ selectednum }}</span> / 全部{{ totalnum }}
    </span>
    <button class="btn btn-danger" @click="clearth">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  name: "Myfooter",
  props: ["todoList", "clearSelected","selectAll"],
  computed: {
    selectednum() {
      let num = 0;
      this.todoList.forEach((element) => {
        if (element.todo) {
          num++;
        }
      });
      return num;
    },
    totalnum() {
      return this.todoList.length;
    },
    isall() {
      return this.totalnum === this.selectednum && this.totalnum > 0;
    },
  },
  methods: {
    choice(e){
      console.log(e.target.checked)
      this.selectAll(e.target.checked)
    },
    isallselect() {
      return this.totalnum;
    },
    clearth() {
      this.clearSelected();
    },
  },
};
</script>

<style >
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