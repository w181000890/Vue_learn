<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addtodo='addtodo'></MyHeader>
        <MyList :todoList="todoList" :deltodo='deltodo' :checkedth='checkedth'></MyList>
        <Myfooter :todoList="todoList" :clearSelected="clearSelected" :selectAll="selectAll"></Myfooter>
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import Myfooter from "./components/Myfooter"
export default {
  name: "App",
  components: {
    MyHeader: MyHeader,
    MyList: MyList,
    Myfooter:Myfooter
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
    addtodo(data){
      this.todoList.unshift(data)
    },
    //选中
    checkedth(id){
      this.todoList.forEach(element => {
        if(element.id===id){
          return element.todo =!element.todo
        }
      });
    },
  //删除
  deltodo(id){
    this.todoList = this.todoList.filter((val)=>{
      return val.id !=id
    })
  },
  clearSelected(){
    this.todoList = this.todoList.filter((el)=>{
      return !el.todo
    }

    )
  },
  selectAll(flag){
      this.todoList.forEach(val=>{
        val.todo = flag
      })
  }
  
  }
};
</script>

<style >
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