<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addList='addList'/>
        <MyList :todoList='todoList' :checkHandle='checkHandle' :deleteHander='deleteHander'/>
        <MyFooter :todoList='todoList' :btnAll='btnAll' :clearnAll='clearnAll'/>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyFooter from "./components/MyFooter";
import MyList from "./components/MyList";

export default {
  name: "App",
  components: {
    MyHeader,
    MyFooter,
    MyList,
  },
  data() {
    return {
      todoList:[
        {id:'001',title:'抽烟',todo:true},
        {id:'002',title:'喝酒',todo:false},
        {id:'003',title:'开车',todo:true},
      ]
    }
  },
  methods:{
    //添加
    addList(e){
      // console.log(e.target.value)
      this.todoList.unshift(e)
    },
    // 勾选
    checkHandle(id){
      // console.log(id)
      this.todoList.forEach((val)=>{
        if(val.id===id){
          val.todo = !val.todo
        }
      })
    },
    //删除
    deleteHander(id){
      console.log(id)
      this.todoList = this.todoList.filter(val=>val.id !==id)
    },
    //全选
    btnAll(ischeck){
    //   console.log(ischeck)
      this.todoList.filter(val=>val.todo=ischeck)
    },
    //清除已完成任務
    clearnAll(){
      this.todoList = this.todoList.filter((todo)=>{
        return !todo.todo
      })
    }
  }
};
</script>
<style>
    /*base*/
    body {
      background: #fff;
    }

    .btn {
      display: inline-block;
      padding: 4px 12px;
      margin-bottom: 0;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      vertical-align: middle;
      cursor: pointer;
      box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
        0 1px 2px rgba(0, 0, 0, 0.05);
      border-radius: 4px;
    }

    .btn-danger {
      color: #fff;
      background-color: #da4f49;
      border: 1px solid #bd362f;
    }

    .btn-danger:hover {
      color: #fff;
      background-color: #bd362f;
    }

    .btn:focus {
      outline: none;
    }

    .todo-container {
      width: 600px;
      margin: 0 auto;
    }
    .todo-container .todo-wrap {
      padding: 10px;
      border: 1px solid #ddd;
      border-radius: 5px;
    }
</style>

