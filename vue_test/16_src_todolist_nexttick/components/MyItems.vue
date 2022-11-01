<template>
    <li>
      <label>
        <input type="checkbox" :checked='val.todo' @change='checkedChangeInput(val.id)' />
        <span v-show='!val.edit' >{{val.title}}</span>
         <input v-show='val.edit' type='text' :value='val.title'
         @blur='btnblur(val,$event)'
          ref='btnblur'
         />
      </label>
      <button class="btn btn-danger" @click='btndelete(val.id)'>删除</button>
      <button class="btn btn-edit" @click='btnedit(val)'>编辑</button>
    </li>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
  
  name:'MyItems',
  props:['val','changeChecked','deleteItem'],
  methods:{
    checkedChangeInput(id){
      this.changeChecked(id)
    },
    btndelete(id){
      // console.log(id)
        // this.deleteItem(id)
        
        pubsub.publish('deletetodo',id)

    },
    btnedit(val){
      if(!val.hasOwnProperty('edit')){
        this.$set(val,'edit',true)
      }else{
        val.edit = true
        // this.$bus.$emit('edittodo',id)
      }
      // this.$bus.$emit('edittodo',id)
      this.$nextTick(function(){
        this.$refs.btnblur.focus()
      })
    },
    btnblur(val,e){
      val.edit = false;
      if(!e.target.value.trim()) return alert('输入不能为空')
      this.$bus.$emit('edittodo',val,e.target.value)
    }


  },
  
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}
li:hover button{
  display: block;
}
</style>