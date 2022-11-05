<template>
  <div class="container">
    
    <Category title="游戏">
     <template scope="atguigu">
       <ul >
        <li v-for="(item, index) in atguigu.games" :key="index">{{ item }}</li>
      </ul>
     </template>
    </Category>

    <Category title="游戏">
     <template scope="atguigu">
       <ol >
        <li v-for="(item, index) in atguigu.games" :key="index">{{ item }}</li>
      </ol>
     </template>
    </Category>

    <Category title="游戏">
     <template scope="atguigu">
      
        <h4 style="color:red" v-for="(item, index) in atguigu.games" :key="index">{{ item }}</h4>
    
     </template>
    </Category>
 
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: {
    Category,
  },
  
};
</script>

<style>
.container,.foot {
  display: flex;
  justify-content: space-around;
}
img {
  width: 100%;
}
video {
  width: 100%;
}
h2,h4{
  text-align: center;
}
</style>